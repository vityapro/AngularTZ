import { ActionCreatorProps, createAction, props } from '@ngrx/store';
import { ItemAuthor } from "../../services/item";

export enum AuthorActionsTypes {
  AUTHORS_LOAD = '[ITEM] Authors Load',
  AUTHORS_LOADED = '[ITEM] Authors Loaded',
}

export const authorsLoad = createAction(AuthorActionsTypes.AUTHORS_LOAD);
export const authorsLoaded = createAction(AuthorActionsTypes.AUTHORS_LOADED, props<ActionCreatorProps<ItemAuthor[]>>());
