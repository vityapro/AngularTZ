import { Store } from "@ngrx/store";
import { AppState, selectAuthorsLoaded, selectItemsLoaded } from "../store/models/app-state.model";
import { switchMap, take } from "rxjs/operators";
import { itemsLoad } from "../store/actions/item.actions";
import { authorsLoad } from "../store/actions/author.actions";

export function loadCollectionIfNeeded(store: Store<AppState>){
  store.select(selectItemsLoaded)
    .pipe(
      take(1),
      switchMap(itemsLoaded => {
        if (!itemsLoaded) store.dispatch(itemsLoad());
        return store.select(selectAuthorsLoaded);
      }))
    .subscribe(authorsLoaded => {
      if (!authorsLoaded) store.dispatch(authorsLoad());
    });
}
