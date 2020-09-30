import { Injectable } from '@angular/core';
import { ImageModel} from '../models/img.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
    public views: ImageModel;
    public likes: ImageModel;
    public dislikes: ImageModel;
    public comments: ImageModel;

  constructor() {

    this.views = {
      src: '../../../assets/eye.svg',
      class: 'eye-icon',
      alt: 'Views Icon',
    };

    this.likes = {
      src: '../../../assets/heart.svg',
      class: 'disheart-icon',
      alt: 'dislikes icon',
    };

    this.dislikes = {
      class: 'heart-icon',
      src: '../../../assets/heart.svg',
      alt: 'likes icon' ,
    };

    this.comments = {
      class: 'comments-icon',
      src: '../../../assets/copy.svg',
      alt: 'comments icon',
    };
  }
}
