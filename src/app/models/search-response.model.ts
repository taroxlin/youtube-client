import { Item } from  "./search-item.model"

interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}


export class Response {
        kind: string;
        etag: string;
        pageInfo: PageInfo;
        items: Item[];
}