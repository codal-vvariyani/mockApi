import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rf';
  constructor(
    private fb: FormBuilder
  ){}

  get userName(){
    return this.registrationForm.get('userName');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  

  regex = new RegExp('');
  registrationForm = this.fb.group({
    userName: ['abc',[Validators.required, Validators.minLength(3)]],
    password: ['',[Validators.required, Validators.pattern('/^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,30}$/g'),
    Validators.minLength(6)]],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state:[''],
      country:[''],
      postalCode:['']
    })
  },{validator: PasswordValidator});
}
