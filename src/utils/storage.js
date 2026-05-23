// ─── Token Storage ─────────────────────────────────────────
export const setTokens = (accessToken, refreshToken) => {
  if (accessToken) localStorage.setItem('accessToken', accessToken);
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
};

export const getAccessToken = () => localStorage.getItem('accessToken');
export const getRefreshToken = () => localStorage.getItem('refreshToken');

// ─── User Storage ──────────────────────────────────────────
export const setUser = (user) => {
  if (!user || typeof user !== 'object') return; // never store undefined/null/primitives
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  try {
    const raw = localStorage.getItem('user');
    if (!raw || raw === 'undefined' || raw === 'null') return null;
    return JSON.parse(raw);
  } catch {
    // Corrupted data — wipe it so the crash doesn't repeat
    localStorage.removeItem('user');
    return null;
  }
};

// ─── Clear All Auth ────────────────────────────────────────
export const clearAuth = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
};
