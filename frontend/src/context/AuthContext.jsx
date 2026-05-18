import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const API_BASE = 'http://localhost:8080';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('zd_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const token = localStorage.getItem('zd_token');
  const isLoggedIn = Boolean(user && token);

  const register = useCallback(async ({ name, email, password }) => {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Registration failed.');

    localStorage.setItem('zd_token', data.token);
    localStorage.setItem('zd_user', JSON.stringify(data.user));
    setUser(data.user);
    return data;
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Login failed.');

    localStorage.setItem('zd_token', data.token);
    localStorage.setItem('zd_user', JSON.stringify(data.user));
    setUser(data.user);
    return data;
  }, []);


  const logout = useCallback(() => {
    localStorage.removeItem('zd_token');
    localStorage.removeItem('zd_user');
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, isLoggedIn, register, login, logout }),
    [user, isLoggedIn, register, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
}
