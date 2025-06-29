import type { ReviewType } from "./code";

export interface ReviewResult {
    id: string;
    submissionId: string;
    overallscore: number;
    issues: ReviewIssue[];
    suggestions: string;
    learningResources: LearningResource[];
    createdAt: string;
}

export interface ReviewIssue {
    type: 'critical' | 'warning' | 'suggestion';
    category: ReviewType;
    line?: number;
    message: string;
    explanation: string;
    fixSuggestion?: string;
}

export interface LearningResource {
    title: string;
    url: string;
    type: 'article' | 'video' | 'course'
}

