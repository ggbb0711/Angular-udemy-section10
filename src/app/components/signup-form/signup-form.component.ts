import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'signup-form',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(''), 
      password: new FormControl('')
    })
  });

  get username() {
    return this.form.get('account.username');
  }
}
