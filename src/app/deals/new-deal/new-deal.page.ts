import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { CategoriesComponent } from '../categories/categories.component';



@Component({
  selector: 'app-new-deal',
  templateUrl: './new-deal.page.html',
  styleUrls: ['./new-deal.page.scss'],
})
export class NewDealPage implements OnInit {

  constructor(private modalCtrl: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSelectCategory () {
    this.modalCtrl.create({
      component: CategoriesComponent
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    });
  }

}
