import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import AuthReducer from './authReducer';
import { AUTH_SUCCESS, AUTH_ERROR, LOGOUT, CLEAR_ERRORS } from '../types';

export const AuthContext = createContext();

const AuthState = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    error: null
  });

  useEffect(() => {
    const loadUser = async () => {
      if (localStorage.getItem('token')) {
        try {
          const res = await axios.get('/api/auth/me', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          });
          dispatch({ type: AUTH_SUCCESS, payload: { token: localStorage.getItem('token'), user: res.data.user } });
        } catch (err) {
          dispatch({ type: AUTH_ERROR, payload: 'Failed to load user' });
        }
      }
    };
    loadUser();
  }, []);

  const authSuccess = (data) => {
    dispatch({ type: AUTH_SUCCESS, payload: data });
  };

  const authError = error => {
    dispatch({ type: AUTH_ERROR, payload: error });
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
  };

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  const login = async (userData) => {
    try {
      const res = await axios.post('/api/auth/login', userData);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: AUTH_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err.response?.data?.message || 'Server error' });
    }
  };

  const register = async (userData) => {
    try {
      const res = await axios.post('/api/auth/register', userData);
      // After successful registration, redirect to login page instead of logging in directly
      dispatch({ type: LOGOUT }); // Clear any auth state
      localStorage.removeItem('token');
      // Optionally, you can set a success message here to show on login page
    } catch (err) {
      dispatch({ type: AUTH_ERROR, payload: err.response?.data?.message || 'Server error' });
    }
  };

  return (
    <AuthContext.Provider value={{
      token: state.token,
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      error: state.error,
      authSuccess,
      authError,
      login,
      register,
      logout,
      clearErrors
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
