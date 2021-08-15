import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState, getLastNavigationItems } from "../../store/models/app-state.model";
import { Observable } from "rxjs";
import { NavigationItem } from "../../services/navigation";

@Component({
  selector: 'app-navigation-history',
  templateUrl: './navigation-history.component.html',
  styleUrls: ['./navigation-history.component.scss']
})
export class NavigationHistoryComponent implements OnInit {

  public items$: Observable<NavigationItem[]>;

  constructor(private store: Store<AppState>) {
    this.items$ = this.store.select(getLastNavigationItems(15));
  }

  ngOnInit(): void {
  }

}
