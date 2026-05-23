import { api } from "./axios";

export const register = async (userData) => {
  const response = await api.post("/register", userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post("/login", credentials);
  return response.data;
};

export const completeProfile = async (roleData) => {
  const response = await api.patch("/complete-profile", roleData);
  return response.data;
};
