import { add, itemDeleted, itemsLoaded } from '../actions/item.actions';
import { StoreItem } from '../models/item.model';
import { createReducer, on } from '@ngrx/store';

export const initialState: Array<StoreItem> = [];

export const itemReducer = createReducer(
  initialState,
  on(add, (state, data) => {
    console.log(state, data);
    return state;
  }),
  on(itemDeleted, (state, data) => {
    console.log(state, data);
    return state.filter( i => i.id !== data._p.id);
  }),
  on(itemsLoaded, (state, data) => {
    return data._p;
  }),
);
