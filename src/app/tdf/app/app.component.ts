import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tdf';
  countries: any[];
  states: any[];
  cities: any[];

  countryId;
  stateId;

  url = "http://localhost:3000";

  userModel = new User('', '', '', 5556665566, 'default', 'Male', '', '','');
  dropDownHasError = true;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCountry();
  }

  validateDropDown(value) {
    if (value === 'default') {
      this.dropDownHasError = true;
    }
    else {
      this.dropDownHasError = false;
    }
  }

  ////////////GET COUNTRIES DATA//////////////
  getCountry() {
    this.http.get<any>(this.url + '/' + "country")
      .subscribe(response => {
        this.countries = response;
        console.log(this.countries);
      });
  }

  ////////////GET STATES DATA//////////////
  getStates(value) {
    for (let country of this.countries) {
      console.log(country);
      if (value == 'default') {
        this.countryId = null;
      }
      else if (value == country.name) {
        this.countryId = country.id;
        console.log("Country Id: " + this.countryId);
      }
    }
    console.log(value);
    this.http.get<any>(this.url + '/' + "state" + "?countryId=" + this.countryId)
      .subscribe(response => {
        this.states = response;
        console.log(this.states);
      });
  }

  ////////////GET CITIES DATA//////////////
  getCities(value) {
    for (let state of this.states) {
      console.log(state);
      if (value == 'default') {
        this.stateId = null;
      }
      else if (value == state.name) {
        this.stateId = state.id;
        console.log("State Id: " + this.stateId);
      }
    }
    console.log(value);
    this.http.get<any>(this.url + '/' + "city" + "?stateId=" + this.stateId)
      .subscribe(response => {
        this.cities = response;
        console.log(this.cities);
      });
  }

  ////////////SUBMIT DATA/////////////
  submitData() {
    console.log(this.userModel);

    this.http.post<any>(this.url + "/users", this.userModel).subscribe(response => {
      console.log(response);
    });
  }

}