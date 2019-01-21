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

  registrationForm = this.fb.group({
    userName: ['abc',[Validators.required, Validators.minLength(3)]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state:[''],
      postalCode:['']
    })
  },{validator: PasswordValidator});

  // registrationForm = new FormGroup({
  //   userName: new FormControl('abc'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });
}
