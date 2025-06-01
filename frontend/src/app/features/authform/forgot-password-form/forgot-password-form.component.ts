import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['../loginform/loginform.component.css'],
  standalone: false
})
export class ForgotPasswordFormComponent {
  fpForm: FormGroup;
  showHasSendEmail = signal(false);

  constructor(private fb: FormBuilder){
    this.fpForm =  this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  openHasSendEmail() {
    this.showHasSendEmail.set(true);
  }

  closeHasSendEmail() {
    this.showHasSendEmail.set(false);
  }
}

