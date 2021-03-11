import { Comment } from './comment.model';

export interface Post {
    title: string;
    tags: string[];
    date: Date;
    content: string;
    comments: Comment[];
}
