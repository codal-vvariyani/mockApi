import { Directive, ElementRef, OnInit } from '@angular/core';
//const google = require('@types/googlemaps');

@Directive({
  selector: '[google-place]'
})
export class GooglePlacesDirective implements OnInit {
  private element: HTMLInputElement;
  private city: string;
  private state: string;
  private country: string;

  options = {
    types: ['(cities)']
};
  constructor(private elRef: ElementRef) {
    //elRef will get a reference to the element where
    //the directive is placed
    
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    this.getAutoComplete();
  }

  getAutoComplete()
  {
    const autocomplete = new google.maps.places.Autocomplete(this.element, this.options);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      var result = autocomplete.getPlace();
      var address_components = result.address_components;
      console.log(result);
      console.log(address_components);

      //////////GET STATE, CITY & COUNTRY//////////
      for(var j =0 ;j<address_components.length;j++)
      {
        this.city =address_components[0].long_name;
        
        if(address_components[j].types[0]=='country')
        {
          this.country=address_components[j].long_name;
        }
        if(address_components[j].types[0]=='administrative_area_level_1')
        {
          this.state=address_components[j].long_name;
        }
      }
      console.log("City:"+this.city+" State:"+this.state+" Country:"+this.country);
      const data = this.city+this.state+this.country;
      return data;
  });
  }
}