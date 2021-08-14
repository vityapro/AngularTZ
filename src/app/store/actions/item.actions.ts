import { ActionCreatorProps, createAction, props } from '@ngrx/store';
import { StoreItem } from "../models/item.model";

export enum ItemActionTypes {
  ADD_ITEM = '[ITEM] Add Item',
  ITEMS_LOAD = '[ITEM] Load Item',
  ITEMS_LOADED = '[ITEM] Item Loaded',
}

export const add = createAction(ItemActionTypes.ADD_ITEM,  props<ActionCreatorProps<StoreItem>>());
export const loadItems = createAction(ItemActionTypes.ITEMS_LOAD);
export const itemsLoaded = createAction(ItemActionTypes.ITEMS_LOADED, props<ActionCreatorProps<StoreItem[]>>());
