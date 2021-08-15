import { StoreItem } from './item.model';
import { createSelector } from "@ngrx/store";
import { ItemBook, ItemAuthor, ItemType, ItemFilm, ItemFilmI, ItemBookI } from "../../services/item";
import { NavigationItem } from "../../services/navigation";

export interface AppState {
  readonly items: Array<StoreItem>
  readonly authors: Array<ItemAuthor>
  readonly navigationHistory: Array<NavigationItem>
}

export const _selectItems = (state: AppState) => state.items;
export const _selectAuthors = (state: AppState) => state.authors;
export const _selectNavigationHistory = (state: AppState) => state.navigationHistory;

const mapItems = (item: StoreItem, authors: ItemAuthor[]) => {
  let author = authors.find((author) => author.id === item.authorId)
  if(item.type === ItemType.Film){
    let i = item as ItemFilmI;
    return new ItemFilm(i, author);
  } else {
    let i = item as ItemBookI;
    return new ItemBook(i, author);
  }
};

export const getOne = (itemId: number) => createSelector(
  _selectItems,
  _selectAuthors,
  (items, authors) => {
    return items
      .map((item) => mapItems(item, authors))
      .find(item => item.id == itemId)
  });

export const getItemsByAuthor = (authorId: number) => createSelector(
  _selectItems,
  _selectAuthors,
  (items, authors) => {
    return items
      .map((item) => mapItems(item, authors))
      .filter(item => item.authorId == authorId)
  });

export const selectItems = createSelector(
  _selectItems,
  _selectAuthors,
  (items, authors) => {
    return items.map((item) => mapItems(item, authors))
  }
);

export const selectItemsLoaded = createSelector(
  _selectItems,items => (items.length > 0)
);

export const selectAuthorsLoaded = createSelector(
  _selectAuthors,authors => (authors.length > 0)
);

export const selectFilmCount = createSelector(
  _selectItems,
  (state) => state.filter(i => i.type === ItemType.Film).length
);

export const getLastNavigationItems = (itemsCount: number) => createSelector(
  _selectNavigationHistory,
  (items) => {
    return items.slice(-itemsCount);
  });
