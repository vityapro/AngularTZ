import { Injectable } from '@angular/core';
import { ItemService } from "./item.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ItemActionTypes } from "../../store/actions/item.actions";
import { AuthorActionsTypes } from "../../store/actions/author.actions";
import { catchError, map, mergeMap } from "rxjs/operators";
import { EMPTY, Observable } from "rxjs";
import { AddActionProps } from "../../store/models/item.model";


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

  loadAuthors$ = createEffect(() => this.actions$.pipe(
      ofType(AuthorActionsTypes.AUTHORS_LOAD),
      mergeMap(() => this.itemService.getAllAuthors()
        .pipe(
          map(items => ({ type: AuthorActionsTypes.AUTHORS_LOADED, _p: items })),
          catchError(() => EMPTY)
        ))
    )
  );

  addItem$ = createEffect(() => this.actions$.pipe(
      ofType(ItemActionTypes.ITEM_ADD),
      mergeMap<AddActionProps , Observable<any>>((value) => {
          return this.itemService.create(value._p).pipe(
            map(() => ({...value, type: ItemActionTypes.ITEM_ADDED })),
            catchError(() => EMPTY)
          )
        }
      )
    )
  );

  deleteItem$ = createEffect(() => this.actions$.pipe(
      ofType(ItemActionTypes.ITEM_DELETE),
      mergeMap<{ type: string, id: number }, Observable<any>>((value) => {
          console.log(value);
          return this.itemService.delete(value.id).pipe(
            map(() => ({ type: ItemActionTypes.ITEM_DELETED, _p: {id: value.id} })),
            catchError(() => EMPTY)
          )
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private itemService: ItemService
  ) {}

}
