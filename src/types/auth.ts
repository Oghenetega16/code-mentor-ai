export interface User {
    id: string;
    username: string;
    email: string;
    avatar?: string;
    skillLevel: 'beginner' | 'intermediate' | 'advanced';
    techStack: string[];
    createdAt: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}