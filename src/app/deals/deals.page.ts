import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {
  public isMyDeals: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  change() {
    this.isMyDeals = !this.isMyDeals;
  }

}
