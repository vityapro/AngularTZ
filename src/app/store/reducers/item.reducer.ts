import { add, itemsLoaded } from '../actions/item.actions';
import { StoreItem } from '../models/item.model';
import { createReducer, on } from '@ngrx/store';

export const initialState: Array<StoreItem> = [];

export const itemReducer = createReducer(
  initialState,
  on(add, (state, data) => {
    console.log(state, data);
    return state;
  }),
  on(itemsLoaded, (state, data) => {
    return data._p;
  }),
);
