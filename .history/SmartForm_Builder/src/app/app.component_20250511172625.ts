import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './features/form-builder/components/dynamic-form/dynamic-form/dynamic-form.component';
import { FieldType } from './core/models/form-fields/field-type.enum';
import * as FormFields from './core/models/form-fields/index'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent],
  template: `
    <div class="container">
      <h1>Dynamic Form Builder</h1>
      <app-dynamic-form [fields]="fields"></app-dynamic-form>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  fields = [
    new FormFields.TextField('name', 'Họ và tên', '', true, 'Nhập họ và tên'),
    new FormFields.NumberField('age', 'Tuổi', 0, false, 'Nhập tuổi', { min: 0, max: 120 }),
    new FormFields.EmailField('email', 'Email', '', true, 'Nhập email'),
    new FormFields.PasswordField('password', 'Mật khẩu', '', true, 'Nhập mật khẩu')
    new FormFields.DateType('date', 'Date', '', true, )
  ];
}
