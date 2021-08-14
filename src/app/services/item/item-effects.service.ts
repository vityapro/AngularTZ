import { Injectable } from '@angular/core';
import { ItemService } from "./item.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ItemActionTypes } from "../../store/actions/item.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { EMPTY } from "rxjs";


@Injectable()
export class ItemEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
      ofType(ItemActionTypes.ITEMS_LOAD),
      mergeMap(() => this.itemService.getAll()
        .pipe(
          map(items => ({ type: ItemActionTypes.ITEMS_LOADED, _p: items })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private itemService: ItemService
  ) {}

}
