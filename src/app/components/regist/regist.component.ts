
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);


  getErrorName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    return this.name.hasError('name') ? 'Not a valid name' : '';
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' : '';
  }

  getConfirmPasswordErrorMessage() {
    if (this.confirmPassword.hasError('required')) {
      return 'You must confirm your password';
    }
    return this.confirmPassword.value !== this.password.value ? 'Passwords do not match' : '';
  }

  register() {
    if (this.name.valid && this.email.valid && this.password.valid && this.confirmPassword.valid && this.password.value === this.confirmPassword.value) {
      console.log('Name:', this.name.value);
      console.log('Email:', this.email.value);
      console.log('Password:', this.password.value);
    }else{
      this.confirmPassword.setErrors({ 'passwordMismatch': true }); // Устанавливаем ошибку, если пароли не совпадают
   
    }
  }
}





// import { Component } from '@angular/core';
// import {FormControl, Validators} from '@angular/forms';


// @Component({
//   selector: 'app-regist',
//   templateUrl: './regist.component.html',
//   styleUrls: ['./regist.component.scss']
// })
// export class RegistComponent {
//   email = new FormControl('', [Validators.required, Validators.email]);
//   password = new FormControl('', [Validators.required]);
//   confirmPassword = new FormControl('', [Validators.required]);
  
  
// confirmPasswordValidator(control: FormControl) {
//   if (!control.value) {
//     return null; // Пароль подтверждения не заполнен, ошибка не нужна
//   }
//   const password = this.password.value;
//   if (control.value !== password) {
//     return { 'passwordsDontMatch': true }; // Создаем объект ошибки с ключом 'passwordsDontMatch'
//   }
//   return null;
// }

//   getErrorMessage() {
//     if (this.email.hasError('required')) {
//       return 'You must enter a value';
//     }
//     return this.email.hasError('email') ? 'Not a valid email' : '';
//   }

//   getPasswordErrorMessage() {
//     return this.password.hasError('required') ? 'You must enter a password' : '';
//   }

//   getConfirmPasswordErrorMessage() {
//     if (this.confirmPassword.hasError('required')) {
//       return 'You must confirm your password';
//     }
//     return this.confirmPassword.value !== this.password.value ? 'Passwords do not match' : '';
//   }
 
//   register() {
//     if (this.email.valid && this.password.valid && this.confirmPassword.valid) {
//       console.log('Email:', this.email.value);
//       console.log('Password:', this.password.value);
//     }
//   }
// }





//  email = new FormControl('', [Validators.required, Validators.email]);
//  password = new FormControl('', [Validators.required]);
//  confirmPassword = new FormControl('', [Validators.required]);

//   getErrorMessage() {
//     if (this.email.hasError('required')) {
//       return 'You must enter a value';
//     }

//     return this.email.hasError('email') ? 'Not a valid email' : '';
//   }


//   getPasswordErrorMessage() {
//     return this.password.hasError('required') ? 'You must enter a password' : '';
//   }

//   getConfirmPasswordErrorMessage() {
//     if (this.confirmPassword.hasError('required')) {
//       return 'You must confirm your password';
//     }
//     return this.confirmPassword.value !== this.password.value ? 'Passwords do not match' : '';
//   }

//   register() {
//     if (this.email.valid && this.password.valid && this.confirmPassword.valid) {
//       console.log('Email:', this.email.value);
//       console.log('Password:', this.password.value);
//       console.log('Confirmed Password:', this.confirmPassword.value);
//     }
//   }
// }
