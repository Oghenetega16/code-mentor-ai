import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types/auth';
import { verifyToken, mockLogin, mockSignup } from '../services/auth';

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

// Token management
const TOKEN_KEY = 'authToken';
const getToken = () => localStorage.getItem(TOKEN_KEY);
const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);
const clearToken = () => localStorage.removeItem(TOKEN_KEY);

type AuthAction =
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'LOGIN_SUCCESS'; payload: User }
    | { type: 'LOGOUT' }
    | { type: 'UPDATE_USER'; payload: Partial<User> }
    | { type: 'SET_ERROR'; payload: string | null };

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
                error: null,
            };
        case 'LOGOUT':
            return {
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: null,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                user: state.user ? { ...state.user, ...action.payload } : null,
            };
        case 'SET_ERROR':
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
};

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const checkAuthStatus = async () => {
            const token = getToken();
            if (token) {
                try {
                    const user = await verifyToken(token);
                    dispatch({ type: 'LOGIN_SUCCESS', payload: user });
                } catch (error) {
                    clearToken();
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
        dispatch({ type: 'SET_ERROR', payload: null });

        try {
            const { token, user } = await mockLogin(email, password);
            setToken(token);
            dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        } catch (error: any) {
            dispatch({ type: 'SET_ERROR', payload: error.message || 'Login failed' });
        }
    };

    const signup = async (userData: SignupData) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        dispatch({ type: 'SET_ERROR', payload: null });

        try {
            const { token, user } = await mockSignup(userData);
            setToken(token);
            dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        } catch (error: any) {
            dispatch({ type: 'SET_ERROR', payload: error.message || 'Signup failed' });
        }
    };

    const logout = () => {
        clearToken();
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

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
