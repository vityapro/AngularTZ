import { Injectable } from '@angular/core'
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import { Store } from "@ngrx/store";
import { AppState } from "../../store/models/app-state.model";
import { addNavigation } from "../../store/actions/navigation.actions";
import { NavigationItem } from "./navigation.types";

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

  private history: string[] = []

  constructor(private router: Router,
              private store: Store<AppState>,
              private location: Location) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
        this.addNavigationToHistory({
          url: event.urlAfterRedirects
        });
      }
    })
  }

  back(defaultBackURL: string | null): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      if(defaultBackURL){
        this.router.navigate([defaultBackURL]);
      } else {
        this.router.navigateByUrl('/')
      }
    }
  }

  addNavigationToHistory(navigation: NavigationItem){
    this.store.dispatch(addNavigation(navigation));
  }
}
