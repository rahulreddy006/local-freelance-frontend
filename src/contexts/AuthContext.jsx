import React, { createContext, useState, useEffect, useCallback } from "react";
import { useQueryClient } from '@tanstack/react-query';
import {
  getUser,
  setUser as storeUser,
  setTokens,
  clearAuth,
  getAccessToken,
} from "../utils/storage";
import { getMe } from "../api/user.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Hydrate auth state from localStorage on mount
  useEffect(() => {
    const storedUser = getUser();
    const token = getAccessToken();
    if (storedUser && token) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  // Login with user data (used by local login)
  const loginContext = useCallback((userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  }, []);

  // Login with tokens only (used by OAuth flow)
  // Stores tokens, fetches user profile, updates state
  const loginWithTokens = useCallback(async (accessToken, refreshToken) => {
    setTokens(accessToken, refreshToken);

    try {
      // Try to fetch user profile from backend
      // GET /me returns user object directly (verified via runtime logs)
      const response = await getMe();
      const userData = response.user;
      if (!userData || !userData.email)
        throw new Error("Failed to fetch user profile");
      storeUser(userData);
      setUser(userData);
      setIsAuthenticated(true);
      return userData;
    } catch (error) {
      // Fallback: decode JWT to extract basic user info
      try {
        const payload = JSON.parse(atob(accessToken.split(".")[1]));
        const userData = {
          id: payload.id || payload._id || payload.sub,
          name: payload.name || "",
          email: payload.email || "",
          role: payload.role || null,
          isOnboarded: payload.isOnboarded === true,
          provider: "google",
        };
        storeUser(userData);
        setUser(userData);
        setIsAuthenticated(true);
        return userData;
      } catch (decodeError) {
        // If even JWT decode fails, clear everything
        clearAuth();
        throw new Error("Failed to authenticate");
      }
    }
  }, []);

  // Update tokens and user state atomically (used after onboarding)
  // Replaces old tokens + syncs auth state
  const updateAuthTokens = useCallback(
    (accessToken, refreshToken, userData) => {
      setTokens(accessToken, refreshToken);
      storeUser(userData);
      setUser(userData);
      setIsAuthenticated(true);
    },
    [],
  );

  const queryClient = useQueryClient();

  const logoutContext = useCallback(() => {
    queryClient.clear();
    clearAuth();
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        loginContext,
        loginWithTokens,
        updateAuthTokens,
        logoutContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
