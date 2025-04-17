import { PasswordValidators } from './password.validators';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'change-password',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', 
        Validators.required, 
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  get oldPassword():FormControl { return this.form.get('oldPassword') as FormControl; }
  get newPassword(): FormControl { return this.form.get('newPassword') as FormControl; }
  get confirmPassword(): FormControl { return this.form.get('confirmPassword') as FormControl; }
}
