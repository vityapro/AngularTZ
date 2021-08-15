import { Component, OnInit } from '@angular/core';
import { NavigationService } from "../../services/navigation";
import { RoutesPath } from "../../types";
import { Observable } from "rxjs";
import { ItemBook, ItemFilm } from "../../services/item";
import { Store } from "@ngrx/store";
import { AppState, getItemsByAuthor } from "../../store/models/app-state.model";
import { ActivatedRoute } from "@angular/router";
import { loadCollectionIfNeeded } from "../../utils";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  items$: Observable<(ItemFilm | ItemBook)[]>;

  constructor(private navigation: NavigationService,
              private route: ActivatedRoute,
              private store: Store<AppState>) {
    let itemId = this.route.snapshot.paramMap.get('id') as string;
    this.items$ = store.select(getItemsByAuthor(parseInt(itemId)));
  }

  ngOnInit(): void {
    loadCollectionIfNeeded(this.store);
  }

  back() {
    this.navigation.back(RoutesPath.table);
  }

}
