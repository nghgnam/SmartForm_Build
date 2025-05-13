import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './features/form-builder/components/dynamic-form/dynamic-form/dynamic-form.component';
import { FieldType } from './core/models/form-fields/field-type.enum';
import { TextField } from './core/models/form-fields/text-field.model';
import { EmailField } from './core/models/form-fields/email-field.model';
import { PasswordField } from './core/models/form-fields/password-field.model';
import { NumberField } from './core/models/form-fields/number-field.model';
import { DateType } from './core/models/form-fields';


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
    new TextField('name', 'Họ và tên', '', true, 'Nhập họ và tên'),
    new NumberField('age', 'Tuổi', 0, false, 'Nhập tuổi', { min: 0, max: 120 }),
    new EmailField('email', 'Email', '', true, 'Nhập email'),
    new PasswordField('password', 'Mật khẩu', '', true, 'Nhập mật khẩu'),

  ];
}
