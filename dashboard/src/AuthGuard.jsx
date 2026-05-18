const FRONTEND_LOGIN_URL = 'http://localhost:5173/login';

export default function AuthGuard({ children }) {
  const token = localStorage.getItem('zd_token');

  if (!token) {
    window.location.href = FRONTEND_LOGIN_URL;
    return null;
  }

  try {
    const [, payload] = token.split('.');
    const decoded = JSON.parse(atob(payload));
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem('zd_token');
      localStorage.removeItem('zd_user');
      window.location.href = FRONTEND_LOGIN_URL;
      return null;
    }
  } catch {
    localStorage.removeItem('zd_token');
    localStorage.removeItem('zd_user');
    window.location.href = FRONTEND_LOGIN_URL;
    return null;
  }

  return children;
}
