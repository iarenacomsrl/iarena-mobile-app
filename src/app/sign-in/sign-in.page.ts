import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  userInLoginPage = true;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {

  }

  async onSwitchAuth() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }

}
