import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types/auth';
import { api } from '../services/api';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: SignupData) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
  techStack: string[];
}

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: Partial<User> };

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case 'LOGOUT':
      return {
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : null,
      };
    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for existing token on app load
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          // Verify token with backend
          const response = await api.get('/auth/verify');
          dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.user });
        } catch (error) {
          localStorage.removeItem('authToken');
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      } else {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // For now, simulate API call - replace with actual backend call
      const mockUser: User = {
        id: '1',
        username: email.split('@')[0],
        email,
        skillLevel: 'intermediate',
        techStack: ['JavaScript', 'React'],
        createdAt: new Date().toISOString(),
      };
      
      localStorage.setItem('authToken', 'mock-token-' + Date.now());
      dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Login failed');
    }
  };

  const signup = async (userData: SignupData) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    try {
      // For now, simulate API call - replace with actual backend call
      const mockUser: User = {
        id: Date.now().toString(),
        username: userData.username,
        email: userData.email,
        skillLevel: userData.skillLevel,
        techStack: userData.techStack,
        createdAt: new Date().toISOString(),
      };
      
      localStorage.setItem('authToken', 'mock-token-' + Date.now());
      dispatch({ type: 'LOGIN_SUCCESS', payload: mockUser });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Signup failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    dispatch({ type: 'LOGOUT' });
  };

  const updateUser = (userData: Partial<User>) => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
  };

  const value: AuthContextType = {
    ...state,
    login,
    signup,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};