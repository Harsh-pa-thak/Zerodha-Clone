const BASE_URL = 'http://localhost:8080';
const FRONTEND_URL = 'http://localhost:5174';

function getToken() {
  const match = document.cookie.match(new RegExp('(?:^|; )zd_token=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : '';
}

function clearAuth() {
  document.cookie = 'zd_token=; Max-Age=0; path=/';
}

function authHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  };
}

function handleUnauthorized() {
  clearAuth();
  window.location.href = `${FRONTEND_URL}/login`;
}

export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'GET',
    headers: authHeaders(),
    credentials: 'include',
  });

  if (res.status === 401) {
    handleUnauthorized();
    return null;
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }

  return res.json();
}

export async function apiPost(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: authHeaders(),
    credentials: 'include',
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    handleUnauthorized();
    return null;
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }

  return res.json();
}

export async function apiPut(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'PUT',
    headers: authHeaders(),
    credentials: 'include',
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    handleUnauthorized();
    return null;
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }

  return res.json();
}

export async function apiDelete(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'DELETE',
    headers: authHeaders(),
    credentials: 'include',
  });

  if (res.status === 401) {
    handleUnauthorized();
    return null;
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed with status ${res.status}`);
  }

  return res.json();
}
