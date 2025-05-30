import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DynamicFormComponent} from '../dynamic-form/dynamic-form/dynamic-form.component';
import { FormField } from '../../../../core/models/form-fields';
import * as FormFields from "../../../../core/models/form-fields/index"
@Component({
  selector: 'app-formbuilder',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    DynamicFormComponent
],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent {
  fields = [
    new FormFields.TextField('name', 'Họ và tên', '', true, 'Nhập họ và tên'),
    new FormFields.NumberField('age', 'Tuổi', 0, false, 'Nhập tuổi', { min: 0, max: 120 }),
    new FormFields.EmailField('email', 'Email', '', true, 'Nhập email'),
    new FormFields.PasswordField('password', 'Mật khẩu', '', true, 'Nhập mật khẩu'),
    new FormFields.DateType('date', 'Date', '', true, '',{ minDate: '01/01/1900', maxDate: '01/01/2025'}),
    new FormFields.SelectType('select', 'Select', '' ,  false , '',
      [ 
        {label: 'nhnam', value: 'nhnam' },
        {label: 'nhlinh', value: 'nhlinh'}
      ])
  ];
}
