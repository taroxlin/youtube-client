
export  interface Default {
    url: string;
    width: number;
    height: number;
}

export interface Medium {
    url: string;
    width: number;
    height: number;
}

export interface High {
    url: string;
    width: number;
    height: number;
}

export interface Standard {
    url: string;
    width: number;
    height: number;
}

export interface Maxres {
    url: string;
    width: number;
    height: number;
}

export interface Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
    standard: Standard;
    maxres: Maxres;
}

export interface Localized {
    title: string;
    description: string;
}

export interface Snippet {
    publishedAt: Date;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: Localized;
    defaultAudioLanguage: string;
    defaultLanguage: string;
}

export interface Statistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}

export class ItemModel {
    public kind: string;
    public etag: string;
    public id: string;
    public snippet: Snippet;
    public statistics: Statistics;
}
