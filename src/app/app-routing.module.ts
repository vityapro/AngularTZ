import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from './types';
import { HomeComponent } from "./pages/tabs/home/home.component";
import { TableComponent } from "./pages/tabs/table/table.component";
import { FormComponent } from "./pages/tabs/form/form.component";
import { ItemDetailsComponent } from "./pages/item-details/item-details.component";
import { AuthorComponent } from "./pages/author/author.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RoutesPath.home
      },
      {
        path: RoutesPath.home,
        component: HomeComponent
      },
      {
        path: RoutesPath.table,
        component: TableComponent
      },
      {
        path: RoutesPath.form,
        component: FormComponent
      },
      {
        path: `${RoutesPath.details}/:id`,
        component: ItemDetailsComponent
      },
      {
        path: `${RoutesPath.author}/:id`,
        component: AuthorComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
