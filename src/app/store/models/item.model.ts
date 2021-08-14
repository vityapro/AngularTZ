export interface StoreItem {
  id: number;
  title: string;
  authorId: number;
  type: string;
  details: {[key: string]: any}
}

export interface ItemState {
  counter: number;
}
