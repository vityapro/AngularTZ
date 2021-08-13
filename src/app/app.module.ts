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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    FormComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TabMenuModule,
    TableModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ConfirmationService,
    NavigationService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
