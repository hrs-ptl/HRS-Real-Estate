import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IpropertyBase } from 'src/app/model/ipropertybase';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  // @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs?: TabsetComponent;

  addPropertyForm:FormGroup;

// from the DBs afterwards
  propertyTypes: Array<string> = ['House','Apartment', 'Duplex' ]
  furnishTypes: Array<string> = ['Fully','Semi', 'Unfurnished' ]
  mainEntrance: Array<string> = ['East','West', 'North', 'South' ]

  propertyView: IpropertyBase = {
    Id: null,
    SellRent: null,
    Name: '',
    PType: null,
    Price: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    RTM: null,
    City: null
  };

  constructor(private router: Router,
              private fb:FormBuilder) { }

  ngOnInit() {
this.CreateAddPropertyForm();
    
  }

  CreateAddPropertyForm( ){
    this.addPropertyForm = this.fb.group({
      SellRent: [null, Validators.required],
      PType: [null,Validators.required],
      Name: [null,Validators.required],
      BuiltArea: [null,Validators.required],
      Price: [null,Validators.required]
      
    })
  }

  onNext()
  {

    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('congrats,the property form has been successfully submitted');
    console.log(this.addPropertyForm);
    console.log('SellRent=',this.addPropertyForm.value.SellRent);
    
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
