export interface CodeSubmission {
    id: string;
    userId: string;
    title: string;
    description: string;
    language: string;
    code: string;
    files?: CodeFile[];
    reviewTypw: ReviewType[];
    isPublic: boolean;
    createdAt: string;
}

export interface CodeFile {
    name: string;
    content: string;
    language: string;
}

export type ReviewType = 'best-practices' | 'security' | 'performance' | 'readability';