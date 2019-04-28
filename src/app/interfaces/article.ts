import { Source } from './source';

export interface Article {
    title: string;
    image: string;
    description: string;
    content: string;
    sources?: Source[]
}
