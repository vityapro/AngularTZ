import { StoreItem } from "../../store/models/item.model";

export interface Item extends StoreItem{
  author: ItemAuthor;
  details: {[key: string]: any}
}

export enum ItemType{
  Film = 'Film',
  Book = 'Book'
}

export interface ItemBook extends Item{
  details: {
    numberOfPages: number
  }
}

export interface ItemFilm extends Item{
  details: {
    runningTime: number
    closingCreditsTime: number
  }
}

export interface ItemAuthor {
  id: number,
  name: string,
}
