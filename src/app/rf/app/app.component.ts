import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/shared/password-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 private city_data: string;
 private state_data: string;
 private country_data: string;
 model;

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

  get city(){
    return this.registrationForm.get('address')
  }

  get email(){
    return this.registrationForm.get('email')
  }

  getCity(data){
    console.log("Data from form: " + data.city);
    this.city_data=data.city;
    this.state_data=data.state;
    this.country_data=data.country;
  }

  regex = new RegExp('');
  registrationForm = this.fb.group({
    userName: ['',[Validators.required, Validators.minLength(3)]],
    password: ['',[Validators.required, Validators.pattern('/^(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,30}$/g'),
    Validators.minLength(6)]],
    confirmPassword: [''],
    dob:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    address: this.fb.group({
      city: [this.city_data],
      state:[this.state_data],
      country:[this.country_data],
      postalCode:['']
    })
  },{validator: PasswordValidator});

  getCityData(data) {
    console.log("----- city data : ", data);
  }
}
