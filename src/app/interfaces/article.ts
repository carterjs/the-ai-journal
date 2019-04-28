interface Source {
    tag: string;
    description: string;
    url: string;
}

export interface Article {
    title: string;
    image: string;
    description: string;
    content: string;
    sources?: Source[]
}
