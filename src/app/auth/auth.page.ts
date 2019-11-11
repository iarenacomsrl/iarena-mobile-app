import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoginForm = true;
  submitButtonTitle = 'Login';

  constructor() { }

  ngOnInit() {
  }

  onChangeAuthForm(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
    this.isLoginForm = !this.isLoginForm;

    if (!this.isLoginForm) {
      this.submitButtonTitle = 'Register';
    } else {
      this.submitButtonTitle = 'Login';
    }
  }

}
