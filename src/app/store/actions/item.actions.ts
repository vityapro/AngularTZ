import { ActionCreatorProps, createAction, props } from '@ngrx/store';
import { StoreItem } from "../models/item.model";

export enum ItemActionTypes {
  ITEM_ADD = '[ITEM] Item Add',
  ITEM_ADDED = '[ITEM] Item Added',
  ITEM_DELETE = '[ITEM] Item Delete',
  ITEM_DELETED = '[ITEM] Item Deleted',
  ITEMS_LOAD = '[ITEM] Item Load',
  ITEMS_LOADED = '[ITEM] Item Loaded',
}

export const add = createAction(ItemActionTypes.ITEM_ADD,  props<ActionCreatorProps<StoreItem>>());
export const added = createAction(ItemActionTypes.ITEM_ADDED,  props<ActionCreatorProps<StoreItem>>());
export const itemDelete = createAction(ItemActionTypes.ITEM_DELETE,  props<{ id: number }>());
export const itemDeleted = createAction(ItemActionTypes.ITEM_DELETED, props<ActionCreatorProps<{ id: number }>>());
export const itemsLoad = createAction(ItemActionTypes.ITEMS_LOAD);
export const itemsLoaded = createAction(ItemActionTypes.ITEMS_LOADED, props<ActionCreatorProps<StoreItem[]>>());
