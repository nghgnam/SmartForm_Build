import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/share.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class FormModule { }