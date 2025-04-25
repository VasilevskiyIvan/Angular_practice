export interface Profile {
    username: string;
    avatar: string;
    age?: number;
    about?: string;
    location?: string;
    hobbies?: string[];
    socialLinks?: {
        telegram?: string;
        vk?: string;
    };
}