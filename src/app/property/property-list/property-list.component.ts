import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/Services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';
import { Property } from 'src/app/model/property';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent:number = 1;
  properties: Property[];

  constructor(private route:ActivatedRoute, private housingservice: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent =2; //Meaning we are on rent-property URL else we are on base URL.
    }
    this.housingservice.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
        console.log(data);
        
      },
      error=> {
        console.log('http error');
        console.log(error);
      }
    )
  }

    
}

