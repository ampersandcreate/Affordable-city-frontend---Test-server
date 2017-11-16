import {Component, OnInit} from '@angular/core';
import {ApartmentModelData, IApartment} from '../model/apartment.model';
import {ActivatedRoute} from '@angular/router';
import {NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery';


@Component({

    selector: 'app-individual-list-view',
    templateUrl: './individual-list-view.component.html',
    providers: [

        ApartmentModelData

    ],

})
export class IndividualListComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    style: any;
    lat: number;
    lng: number;
    private apartementData: any;
    private apartmentDetail: any;
    private apartementAddress: string;
    private individualApartmentDetail: IApartment;

    constructor(public apartmentData: ApartmentModelData,
                private _route: ActivatedRoute) {
        this.style = [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}];
        this.apartementData = apartmentData.apartmentData;
        this._route.params.subscribe((params) => {
            this.apartementAddress = params['apartmentAddress'];
        });
        this.getApartmentDetail(this.apartementAddress);


    }



    ngOnInit() {

        this.galleryOptions = [
            {
                width: '500px',
                height: '400px',
                thumbnailsColumns: 4,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg'
            },
            {
                small: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg',
                medium: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg',
                big: 'https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg'
            }
        ];
    }

    private getApartmentDetail(apartmentId: String) {
        this.individualApartmentDetail = this.apartementData.filter((app: any) => app.Address === apartmentId);
        console.log('GetApp', this.individualApartmentDetail);
        this.lat = this.individualApartmentDetail[0].Latitude;
        this.lng = this.individualApartmentDetail[0].Longitude;
        console.log(this.lat, this.lng);

    }


}
