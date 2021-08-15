import { MenuItem } from "primeng/api";
import { RoutesPath } from "../../types";

export abstract class TabComponent {

  tabs: MenuItem[] = [
    {label: 'Home', icon: 'pi pi-fw pi-home',  routerLink: [`/${RoutesPath.home}`], replaceUrl: true},
    {label: 'Table', icon: 'pi pi-fw pi-table',  routerLink: [`/${RoutesPath.table}`], replaceUrl: true},
    {label: 'Form', icon: 'pi pi-fw pi-plus',  routerLink: [`/${RoutesPath.form}`], replaceUrl: true},
  ];

  activeTab: MenuItem;

  protected constructor() {
    this.activeTab = this.tabs[0];
  }

}
