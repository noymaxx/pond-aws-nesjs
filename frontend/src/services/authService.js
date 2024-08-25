// src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3333';  

// Serviço de Registro
export const register = async (email, password) => {
  return await axios.post(`${API_URL}/auth/signup`, {
    email,
    password
  });
};

// Serviço de Login
export const login = async (email, password) => {
  return await axios.post(`${API_URL}/auth/signin`, {
    email,
    password,
  });
};

// Serviço para Obter Usuário Logado
export const getUserProfile = async (token) => {
  return await axios.get(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Serviço para Atualizar o Perfil do Usuário
export const updateUserProfile = async (userId, data, token) => {
  return await axios.patch(`${API_URL}/users/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
