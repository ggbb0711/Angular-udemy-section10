import { FormGroup, FormArray, FormControl, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-course-form',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './new-course-form.component.html',
})
export class NewCourseFormComponent {
  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }

  get topics(): FormArray {
    return this.form.get('topics') as FormArray;
  }
}
