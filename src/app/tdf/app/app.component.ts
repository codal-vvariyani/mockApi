import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';

  topics = ['Angular','React','Vue'];
  userModel= new User('', '', 5556665566, 'default', 'morning', true);
  topicHasError=true;

  validateTopic(value){
    if(value === 'default'){
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  }
/////////////////////////NUMBER ONLY FOR PHONE/////////////////////////////////
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 43) {
      return false;
    }
    return true;

  }
}