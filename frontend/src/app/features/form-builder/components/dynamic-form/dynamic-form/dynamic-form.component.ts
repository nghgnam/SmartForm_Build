import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormField } from '../../../../../core/models/form-fields/form-fields.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone: false
})
export class DynamicFormComponent implements OnInit {
  @Input() fields: FormField<any>[] = [];
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const group: { [key: string]: FormControl } = {};

    this.fields.forEach(field => {
      group[field.key] = this.fb.control(field.value, field.validators);
    });

    this.formGroup = this.fb.group(group);
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.snackBar.open("Form valid successful", 'close', {duration: 5000})
    } else {
      console.log("Form is invalid");
      this.formGroup.markAllAsTouched();
    }
  }
}
