

const BASE_URL = 'http://localhost:8080';

function getToken() {
  return localStorage.getItem('zd_token') || '';
}

function authHeaders(extra = {}) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
    ...extra,
  };
}

export async function apiGet(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'GET',
    headers: authHeaders(),
  });

  if (res.status === 401) {
    localStorage.removeItem('zd_token');
    localStorage.removeItem('zd_user');
    window.location.href = 'http://localhost:5173/login';
    return null;
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `API error ${res.status}`);
  }

  return res.json();
}

export async function apiPost(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    localStorage.removeItem('zd_token');
    localStorage.removeItem('zd_user');
    window.location.href = 'http://localhost:5173/login';
    return null;
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `API error ${res.status}`);
  }

  return res.json();
}

export async function apiPut(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    localStorage.removeItem('zd_token');
    localStorage.removeItem('zd_user');
    window.location.href = 'http://localhost:5173/login';
    return null;
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `API error ${res.status}`);
  }

  return res.json();
}

export async function apiDelete(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'DELETE',
    headers: authHeaders(),
  });

  if (res.status === 401) {
    localStorage.removeItem('zd_token');
    localStorage.removeItem('zd_user');
    window.location.href = 'http://localhost:5173/login';
    return null;
  }

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `API error ${res.status}`);
  }

  return res.json();
}
