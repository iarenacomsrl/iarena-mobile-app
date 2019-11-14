import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealsPage } from './deals.page';

const routes: Routes = [
    {
        path: '',
        component: DealsPage
    },
    {
        path: 'new',
        loadChildren: './new-deal/new-deal.module#NewDealPageModule'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DealsRoutingModule {}
