import { createAction, props } from '@ngrx/store';
import { NavigationItem } from "../../services/navigation";

export enum AuthorActionsTypes {
  NAVIGATION_ADD = '[NAVIGATION] Add navigation',
}

export const addNavigation = createAction(AuthorActionsTypes.NAVIGATION_ADD, props<NavigationItem>());
