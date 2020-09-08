
 interface Default {
    url: string;
    width: number;
    height: number;
}

interface Medium {
    url: string;
    width: number;
    height: number;
}

interface High {
    url: string;
    width: number;
    height: number;
}

interface Standard {
    url: string;
    width: number;
    height: number;
}

 interface Maxres {
    url: string;
    width: number;
    height: number;
}

 interface Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
    standard: Standard;
    maxres: Maxres;
}

interface Localized {
    title: string;
    description: string;
}

interface Snippet {
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

 interface Statistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}

export class Item {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    statistics: Statistics;
}
