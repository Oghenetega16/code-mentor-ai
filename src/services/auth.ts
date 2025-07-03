import { User } from '../types/auth';

export const mockLogin = async (email: string, _password: string): Promise<{ token: string; user: User }> => {
    const user: User = {
        id: '1',
        username: email.split('@')[0],
        email,
        skillLevel: 'intermediate',
        techStack: ['JavaScript', 'React'],
        createdAt: new Date().toISOString(),
    };

    return {
        token: 'mock-token-' + Date.now(),
        user,
    };
};

export const mockSignup = async (data: Omit<User, 'id' | 'createdAt'> & { password: string }): Promise<{ token: string; user: User }> => {
    const user: User = {
        id: Date.now().toString(),
        username: data.username,
        email: data.email,
        skillLevel: data.skillLevel,
        techStack: data.techStack,
        createdAt: new Date().toISOString(),
    };

    return {
        token: 'mock-token-' + Date.now(),
        user,
    };
    };

    export const verifyToken = async (_token: string): Promise<User> => {
    // Simulate token verification - in a real app, fetch from backend
    return {
        id: '1',
        username: 'verifiedUser',
        email: 'verified@example.com',
        skillLevel: 'intermediate',
        techStack: ['JavaScript', 'React'],
        createdAt: new Date().toISOString(),
    };
};
