import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './pages/tabs/home/home.component';
import { TableComponent } from './pages/tabs/table/table.component';
import { FormComponent } from './pages/tabs/form/form.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ItemDetailsComponent } from './pages/item-details/item-details.component';
import { NavigationService } from "./services/navigation";
import { CardModule } from 'primeng/card';
import { AuthorComponent } from './pages/author/author.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { StoreModule } from '@ngrx/store';
import { itemReducer } from './store/reducers/item.reducer';
import { EffectsModule } from "@ngrx/effects";
import { ItemEffects } from "./services/item/item.effects";
import { authorReducer } from "./store/reducers/authors.reducer";
import { NavigationHistoryComponent } from './components/navigation-history/navigation-history.component';
import { navigationReducer } from "./store/reducers/navigation.reducer";
import { RippleModule } from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FormComponent,
    ItemDetailsComponent,
    AuthorComponent,
    NavigationHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TabMenuModule,
    TableModule,
    CardModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    StoreModule.forRoot({
      items: itemReducer,
      authors: authorReducer,
      navigationHistory: navigationReducer
    }),
    EffectsModule.forRoot([ ItemEffects ]),
    RippleModule
  ],
  providers: [
    ConfirmationService,
    NavigationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
