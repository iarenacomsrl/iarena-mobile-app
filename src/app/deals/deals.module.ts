import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DealsPage } from './deals.page';
import { MyDealsComponent } from './my-deals/my-deals.component';
import { OpenMarketComponent } from './open-market/open-market.component';
import { DealsRoutingModule } from './deals-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealsRoutingModule
  ],
  declarations: [DealsPage, MyDealsComponent, OpenMarketComponent]
})
export class DealsPageModule {}
