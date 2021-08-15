import { authorsLoaded } from '../actions/author.actions';
import { createReducer, on } from '@ngrx/store';
import { ItemAuthor } from "../../services/item";

export const initialState: Array<ItemAuthor> = [];

export const authorReducer = createReducer(
  initialState,
  on(authorsLoaded, (state, data) => {
    return data._p;
  }),
);
