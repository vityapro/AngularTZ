import { StoreItem } from "../../store/models/item.model";

export interface ItemI extends StoreItem{
  author?: ItemAuthor;
  details: {[key: string]: any}
}

export interface ItemAuthor {
  id: number,
  name: string,
}

export enum ItemType{
  Film = 'Film',
  Book = 'Book'
}

export interface ItemBookI extends ItemI{
  details: {
    numberOfPages: number
  }
}

export interface ItemFilmI extends ItemI{
  details: {
    runningTime: number
    closingCreditsTime: number
  }
}

export class ItemBook implements ItemBookI{

  id: number;
  title: string;
  type: string;
  authorId: number;
  author?: ItemAuthor;
  details: {
    numberOfPages: number
  }

  constructor(storeItem: ItemBookI, author: ItemAuthor | undefined) {
    this.id = storeItem.id;
    this.title = storeItem.title;
    this.authorId = storeItem.authorId;
    this.type = storeItem.type;
    this.author = author;
    this.details = storeItem.details;
  }

}

export class ItemFilm implements ItemFilmI{

  id: number;
  title: string;
  type: string;
  authorId: number;
  author?: ItemAuthor;
  details: {
    runningTime: number
    closingCreditsTime: number
  }

  constructor(storeItem: ItemFilmI, author: ItemAuthor | undefined) {
    this.id = storeItem.id;
    this.title = storeItem.title;
    this.authorId = storeItem.authorId;
    this.type = storeItem.type;
    this.author = author;
    this.details = storeItem.details;
  }

}
