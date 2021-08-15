import { createReducer, on } from '@ngrx/store';
import { NavigationItem } from "../../services/navigation";
import { addNavigation } from "../actions/navigation.actions";

export const initialState: Array<NavigationItem> = [];

export const navigationReducer = createReducer(
  initialState,
  on(addNavigation, (state, data) => {
    return [...state, data ];
  }),
);
