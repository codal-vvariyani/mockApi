import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tdf';

  constructor(private http: HttpClient){}
  countries:any[];
  states:any[];
  
  url = "http://localhost:3000";

  getCountry(){
    this.http.get<any>(this.url+'/'+"country")
  .subscribe(response => {
    this.countries = response;
    console.log(this.countries);
    }); 
  }

  //topics = ['Angular','React','Vue'];
  userModel= new User('','','', 5556665566, 'default', 'Male', '');
  topicHasError=true;

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  }

  getStates(value)
  {
    console.log(value);
    this.http.get<any>(this.url+'/'+"state")
  .subscribe(response => {
    this.states = response;
    console.log(this.states);
    });
  }

  ngOnInit(){
    this.getCountry();
  }
}