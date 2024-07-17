import api from './api';

let token = null;

export async function login(email, password) {
  try {
    const response = await api.post('/login', { email, password });
    token = response.data.token;
    localStorage.setItem('token', token); 
    return token;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export function logout() {
  token = null;
  localStorage.removeItem('token'); 
}

export function getToken() {
  return localStorage.getItem('token');
}

export function isAuthenticated() {
  return !!token || !!localStorage.getItem('token');
}

export function authHeader() {
  const token = getToken();
  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}
