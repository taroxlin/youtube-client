import { ItemModel } from  './search-item.model';

interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export class ResponseModel {
        public kind: string;
        public etag: string;
        public pageInfo: PageInfo;
        public items: ItemModel[];
}
