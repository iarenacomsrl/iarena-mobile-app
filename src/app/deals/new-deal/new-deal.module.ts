import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewDealPage } from './new-deal.page';
import { CategoriesComponent } from '../categories/categories.component';


const routes: Routes = [
  {
    path: '',
    component: NewDealPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewDealPage, CategoriesComponent],
  entryComponents: [CategoriesComponent]
})
export class NewDealPageModule {}
