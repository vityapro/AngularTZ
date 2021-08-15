import { Component, OnInit } from '@angular/core';
import { TabComponent } from "../tab.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends TabComponent implements OnInit {

  constructor() {
    super();
    this.activeTab = this.tabs[0];
  }

  ngOnInit(): void {

  }

}
