import { Component, OnInit } from '@angular/core';
import { TabComponent } from "../tab.component";
import { ItemBook, ItemFilm } from "../../../services/item";
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { RoutesPath } from "../../../types";
import { Store } from '@ngrx/store';
import {
  AppState,
  selectFilmCount,
  selectItems,
} from "../../../store/models/app-state.model";
import { Observable } from "rxjs";
import { itemDelete } from "../../../store/actions/item.actions";
import { loadCollectionIfNeeded } from "../../../utils";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent extends TabComponent implements OnInit {

  items$: Observable<(ItemFilm | ItemBook)[]>;
  filmsCount$: Observable<number>;

  constructor(private confirmationService: ConfirmationService,
              private store: Store<AppState>,
              private router: Router) {
    super();
    this.items$ = store.select(selectItems);
    this.filmsCount$ = store.select( selectFilmCount );
    this.activeTab = this.tabs[1];
  }

  ngOnInit(): void {
    loadCollectionIfNeeded(this.store);
  }

  confirmDelete(itemId: number) {
    this.confirmationService.confirm({
      message: 'Are you sure?',
      accept: () => {
        this.deleteItem(itemId);
      }
    });
  }

  deleteItem(itemId: number) {
    this.store.dispatch(itemDelete({id: itemId}));
  }

  goDetails(itemId: number) {
    this.router.navigate([`/${RoutesPath.details}/${itemId}`]);
  }

  goAuthor(authorId: number) {
    this.router.navigate([`/${RoutesPath.author}/${authorId}`]);
  }

}
