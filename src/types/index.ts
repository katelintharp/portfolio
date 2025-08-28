// src/types/index.ts
export interface Experience {
    role: string;
    company: string;
    date: string;
    description: string[];
    isLeft?: boolean;
}

export interface Project {
    icon: string;
    title: string;
    description: string;
    tags: string[];
    gradient: string;
}

export interface Skill {
    category: string;
    items: string[];
}

export interface Award {
    icon: string;
    title: string;
    description: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    linkedin: string;
    location: string;
}