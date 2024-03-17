import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent {
 email = new FormControl('', [Validators.required, Validators.email]);
 password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' : '';
  }


  login() {
    // Ваша логика для обработки входа
    console.log("Email:", this.email.value);
    console.log("Password:", this.password.value);
  }
}
