import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../../services/navigation";
import { RoutesPath } from "../../types";
import { ItemBook, ItemFilm } from "../../services/item";
import { Store } from "@ngrx/store";
import { AppState, getOne } from "../../store/models/app-state.model";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { loadCollectionIfNeeded } from "../../utils";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: [ './item-details.component.scss' ]
})
export class ItemDetailsComponent implements OnInit {

  item$: Observable<ItemFilm | ItemBook | undefined>;

  constructor(
    private navigation: NavigationService,
    private route: ActivatedRoute,
    private store: Store<AppState>) {
    let itemId = this.route.snapshot.paramMap.get('id') as string;
    this.item$ = this.store.select(getOne(parseInt(itemId)));
  }

  ngOnInit(): void {
    loadCollectionIfNeeded(this.store);
  }

  back() {
    this.navigation.back(RoutesPath.table);
  }

}
