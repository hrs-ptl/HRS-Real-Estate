import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iproperty } from '../iProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

// from the DBs afterwards
  propertyTypes: Array<string> = ['House','Apartment', 'Duplex' ]
  furnishTypes: Array<string> = ['Fully','Semi', 'Unfurnished' ]
  mainEntrance: Array<string> = ['East','West', 'North', 'South' ]

  propertyView: Iproperty = {
    Id: null,
    SellRent: null,
    Name: '',
    Type: null,
    Price: null
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNext()
  {

    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('congrats');
    console.log(this.addPropertyForm);
    
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

  disableEnable() {
    if (this.formTabs?.tabs[2]) {
      this.formTabs.tabs[2].disabled = !this.formTabs.tabs[2].disabled;
    }
  }

}
