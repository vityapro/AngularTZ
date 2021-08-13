export interface Item{
  id: number;
  title: string;
  author: string;
  type: ItemType;
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
