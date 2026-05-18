const FRONTEND_URL = 'http://localhost:5174';

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function clearAuth() {
  document.cookie = 'zd_token=; Max-Age=0; path=/';
}

export default function AuthGuard({ children }) {
  const token = getCookie('zd_token');

  if (!token) {
    window.location.href = `${FRONTEND_URL}/login`;
    return null;
  }

  try {
    const [, payload] = token.split('.');
    const decoded = JSON.parse(atob(payload));
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      clearAuth();
      window.location.href = `${FRONTEND_URL}/login`;
      return null;
    }
  } catch {
    clearAuth();
    window.location.href = `${FRONTEND_URL}/login`;
    return null;
  }

  return children;
}
