import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormField } from '../../../../../core/models/form-fields/form-fields.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit{
  @Input() fields: FormField<any>[] = [];
  FormGroup!: FormGroup;

  constructor(private fb: FormBuilder){
    
  }

  ngOnInit(): void {
    
  }

  buildForm(){
    const group: { [key: string]: FormControl }
  }
}
