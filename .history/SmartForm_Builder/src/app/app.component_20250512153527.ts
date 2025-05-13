import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './features/form-builder/components/dynamic-form/dynamic-form/dynamic-form.component';
import { FieldType } from './core/models/form-fields/field-type.enum';
import * as FormFields from './core/models/form-fields/index'
import { FormbuilderComponent } from './features/form-builder/components/formbuilder/formbuilder.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormbuilderComponent],
  template: `
    <div class="container">
      <h1>Dynamic Form Builder</h1>
      <app-formbuilder></app-formbuilder>
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
  
}
