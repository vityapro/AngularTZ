import { StoreItem } from './item.model';
import { createSelector } from "@ngrx/store";
import { ItemType } from "../../services/item";

export interface AppState {
  readonly items: Array<StoreItem>
}

export const selectItems = (state: AppState) => state.items;

export const selectFilmCount = createSelector(
  selectItems,
  (state) => state.filter(i => i.type === ItemType.Film).length
);
