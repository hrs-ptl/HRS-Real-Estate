import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/Services/housing.service';
import { Property } from 'src/app/model/property';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
property = new Property();
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingservice: HousingService
    ) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: any) => {
        this.property! = data['prp']
      }
    );

    this.property.age = this.housingservice.getPropertyAge(this.property.estPossessionOn);

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingservice.getProperty(this.propertyId).subscribe(
    //       (data:any) => {
    //         this.property = data;
    //       },error => this.router.navigate(['/'])
    //     )
    //   }
    // )
    this.galleryOptions = [
      {
        width: '100%',
        height: '500px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/1-internal.jpg',
        medium: 'assets/images/1-internal.jpg',
        big: 'assets/images/1-internal.jpg'
      },
      {
        small: 'assets/images/2-internal.jpg',
        medium: 'assets/images/2-internal.jpg',
        big: 'assets/images/2-internal.jpg'
      },
      {
        small: 'assets/images/3-internal.jpg',
        medium: 'assets/images/3-internal.jpg',
        big: 'assets/images/3-internal.jpg'
      },{
        small: 'assets/images/4-internal.jpg',
        medium: 'assets/images/4-internal.jpg',
        big: 'assets/images/4-internal.jpg'
      },
      {
        small: 'assets/images/5-internal.jpg',
        medium: 'assets/images/5-internal.jpg',
        big: 'assets/images/5-internal.jpg'
      }
    ];
  }



}
