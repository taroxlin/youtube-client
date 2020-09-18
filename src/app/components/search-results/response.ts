import { ResponseModel } from '../../models/search-response.model';
import { ItemModel } from '../../models/search-item.model';

export class Response {
    public respondExample: ResponseModel;
    public newestVideo: boolean = false;
    public lastestVideo: boolean = false;
    public lessViewed: boolean = false;
    public mostViewed: boolean = false;
    public videoArray: ItemModel[];
    constructor() {
    }
    private sortByDate(): void {
        if (this.newestVideo) {
            this.videoArray = this.getVideoArray().sort((a, b) =>
                new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
        }
        if (this.lastestVideo) {
            this.videoArray = this.getVideoArray();
        }
        if (!this.newestVideo && !this.lastestVideo) {
            this.videoArray = this.getVideoArray().sort((a, b) =>
                new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime());
        }
    }
    private getVideoArray(): ItemModel[] {
        return [...this.respondExample.items];
    }
    private sortByViews(): void {
        console.log(`${this.mostViewed} + ${this.lessViewed}`);
        if (this.mostViewed) {
            this.videoArray.sort((a, b) =>
            Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
        }
        if (this.lessViewed) {
            this.videoArray = this.getVideoArray();
        }
        if (!this.lessViewed && !this.mostViewed) {
            this.videoArray.sort((a, b) =>
                Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
        }
    }
    public updateRespond(respond: ResponseModel): void {
        this.respondExample = respond;
        this.videoArray = this.getVideoArray();
    }
    public sorterHandler(sortValue: string ): void {
        if (sortValue === 'views') {
            this.newestVideo = false;
            this.lastestVideo = false;

            if (this.lessViewed) {
                this.lessViewed = false;
            } else if (this.mostViewed) {
                this.mostViewed = false;
                this.lessViewed = true;
            } else if (!this.mostViewed && !this.lessViewed) {
                this.mostViewed = true;
            }
            this.sortByViews();
        }
        if (sortValue === 'dates') {
            this.mostViewed = false;
            this.lessViewed = false;
            if (this.newestVideo) {
                this.newestVideo = false;
                this.lastestVideo = true;
            } else if (this.lastestVideo) {
                this.lastestVideo = false;
            } else if (!this.newestVideo && !this.lastestVideo) {
                this.newestVideo = true;
            }
            this.sortByDate();
        }
    }

    public filterBy(param: string): void {
        this.videoArray = this.getVideoArray().filter((item) =>
            item.snippet.title.toLowerCase().includes(param));
        if (this.mostViewed || this.lessViewed) {
          this.sortByViews();
       }
    }

}
