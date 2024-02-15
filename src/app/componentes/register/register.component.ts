import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPass: ['', [Validators.required]] // Cambio aquí
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPass = group.get('confirmPass')?.value; // Cambio aquí
    return password === confirmPass ? null : { passwordMismatch: true };
  }

  get fullname() {
    return this.loginForm.controls['fullname'];
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  get confirmPass() {
    return this.loginForm.controls['confirmPass']; // Cambio aquí
  }
}
