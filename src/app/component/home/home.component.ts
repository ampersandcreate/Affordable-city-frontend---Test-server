import {
    AfterViewInit,
    Component, Input, OnChanges,
    OnInit
} from "@angular/core";
import {AppState} from '../../app.service';
import {ApartmentModelData} from './model/apartment.model';
import {Title} from '@angular/platform-browser';
import {FormControl} from '@angular/forms';
import * as _ from 'underscore';
import {MapService} from './services/map.service';
import {NotificationsService} from 'angular2-notifications/dist';
import {DEFAULT_NOTIFICATION_OPTIONS} from '../../config-files/constants';

@Component({
    selector: "app-home",
    providers: [
        Title,
        ApartmentModelData
    ],
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html"

})

export class HomeComponent implements OnInit, OnChanges, AfterViewInit {
    titlemap: string;
    lat: number;
    lng: number;
    style: any;
    latValue: number;
    lngValue: number;
    annualSalary: number = 24000;
    @Input() model: FormControl;
    @Input() defaultValue: any;
    @Input() min: any;
    @Input() max: any;
    @Input() readonly: any;
    @Input() opts: any;

    /* Default Options */
    defaultOpts = {
        defaultValue: 24000,
        min: 24000,
        max: 250000,
        readonly: false,
        trigger: 1000,
        label: {
            range: 1000,
            format: '$9'
        },
        popover: {
            autohide: true
        }
    }

    sliderModel: FormControl = new FormControl();
    options: any = {}
    public apartementData: any;
    public localState = {value: ""};
    public workAddressData: any = '';
    public geoAddressSettings: any = {
        showSearchButton: false,
        currentLocIconUrl: 'https://cdn4.iconfinder.com/data/icons/proglyphs-traveling/512/Current_Location-512.png',
        locationIconUrl: 'http://www.myiconfinder.com/uploads/iconsets/369f997cef4f440c5394ed2ae6f8eecd.png',
        recentStorageName: 'workAddressData',
        noOfRecentSearchSave: 2
    };
    private thresholdAmount: number;

    constructor(public appState: AppState,
                public title: Title,
                public apartmentData: ApartmentModelData,
                public _mapService: MapService,
                private _notification: NotificationsService,) {

        this.initialMap();


    }

    ngOnChanges() {
        /* Detect Input() Changes */

    }

    public ngOnInit() {

        this._mapService.$rentValue.subscribe(
            (annualSalary) => {
                console.log('Annual Salary 1: ', annualSalary);

                this.thresholdAmount = annualSalary / 40;

                this.apartementData = this._mapService.mapFilter(this.thresholdAmount + 1000);

                this.annualSalary = this.thresholdAmount + 1000;
                this.annualSalary = annualSalary;
            }
        );
        this.titlemap = "My first AGM project";
        this.lng = this.lngValue;
        this.lat = this.latValue;

        /*   this.style = [
               {
                   featureType: "administrative",
                   elementType: "labels.text.fill",
                   stylers: [
                       {
                           color: "#40a27c"
                       }
                   ]
               },
               {
                   featureType: "landscape",
                   elementType: "all",
                   stylers: [
                       {
                           color: "#f2f2f2"
                       }
                   ]
               },
               {
                   featureType: "poi",
                   elementType: "all",
                   stylers: [
                       {
                           visibility: "off"
                       }
                   ]
               },
               {
                   featureType: "road",
                   elementType: "all",
                   stylers: [
                       {
                           saturation: -100
                       },
                       {
                           lightness: 45
                       }
                   ]
               },
               {
                   featureType: "road.highway",
                   elementType: "all",
                   stylers: [
                       {
                           visibility: "simplified"
                       }
                   ]
               },
               {
                   featureType: "road.arterial",
                   elementType: "labels.icon",
                   stylers: [
                       {
                           visibility: "off"
                       }
                   ]
               },
               {
                   featureType: "transit",
                   elementType: "all",
                   stylers: [
                       {
                           visibility: "off"
                       }
                   ]
               },
               {
                   featureType: "water",
                   elementType: "all",
                   stylers: [
                       {
                           color: "#4348A0"
                       },
                       {
                           visibility: "on"
                       }
                   ]
               }
           ];
           [
               {
                   elementType: "geometry",
                   stylers: [
                       {
                           color: "#f5f5f5"
                       }
                   ]
               },
               {
                   elementType: "labels.icon",
                   stylers: [
                       {
                           visibility: "off"
                       }
                   ]
               },
               {
                   elementType: "labels.text.fill",
                   stylers: [
                       {
                           color: "#616161"
                       }
                   ]
               },
               {
                   elementType: "labels.text.stroke",
                   stylers: [
                       {
                           color: "#f5f5f5"
                       }
                   ]
               },
               {
                   featureType: "administrative.land_parcel",
                   elementType: "labels.text.fill",
                   stylers: [
                       {
                           color: "#bdbdbd"
                       }
                   ]
               },
               {
                   featureType: "poi",
                   elementType: "geometry",
                   stylers: [
                       {
                           color: "#eeeeee"
                       }
                   ]
               },
               {
                   featureType: "poi",
                   elementType: "labels.text.fill",
                   stylers: [
                       {
                           color: "#757575"
                       }
                   ]
               },
               {
                   featureType: "poi.park",
                   elementType: "geometry",
                   stylers: [
                       {
                           color: "#e5e5e5"
                       }
                   ]
               },
               {
                   featureType: "poi.park",
                   elementType: "labels.text.fill",
                   stylers: [
                       {
                           color: "#9e9e9e"
                       }
                   ]
               },
               {
                   featureType: "road",
                   elementType: "geometry",
                   stylers: [
                       {
                           color: "#ffffff"
                       }
                   ]
               },
               {
                   featureType: "road.arterial",
                   elementType: "labels.text.fill",
                   stylers: [
                       {
                           color: "#757575"
                       }
                   ]
               },
               {
                   featureType: "road.highway",
                   elementType: "geometry",
                   stylers: [
                       {
                           color: "#dadada"
                       }
                   ]
               },
               {
                   featureType: "road.highway",
                   elementType: "labels.text.fill",
                   stylers: [
                       {
                           color: "#616161"
                       }
                   ]
               },
               {
                   featureType: "road.local",
                   elementType: "labels.text.fill",
                   stylers: [
                       {
                           color: "#9e9e9e"
                       }
                   ]
               },
               {
                   featureType: "transit.line",
                   elementType: "geometry",
                   stylers: [
                       {
                           color: "#e5e5e5"
                       }
                   ]
               },
               {
                   featureType: "transit.station",
                   elementType: "geometry",
                   stylers: [
                       {
                           color: "#eeeeee"
                       }
                   ]
               },
               {
                   featureType: "water",
                   elementType: "geometry",
                   stylers: [
                       {
                           color: "#c9c9c9"
                       }
                   ]
               },
               {
                   featureType: "water",
                   elementType: "labels.text.fill",
                   stylers: [
                       {
                           color: "#9e9e9e"
                       }
                   ]
               }
           ];*/

        this.style = [
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "50"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "-100"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "40"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            }
        ]
        this.setConfiguration();
        this.setSliderValue();

        /* const slider = new Slider("#salary", {
           formatter: function (value) {
             return "Current value: " + value;
           }
         });
     */

    }

    initialMap() {
        this.latValue = 40.7739764;
        ;
        this.lngValue = -73.95385469999997;
        this.options = _.clone(this.defaultOpts);
        this.thresholdAmount = (24000) / 40;
        this.apartementData = this._mapService.mapFilter(this.thresholdAmount + 1000);
    }

    geoautoCompleteCallback(data: any): any {

        if (!data) {
            this.initialMap();
        }
        else {
            console.log('Call Back Data - True', data);
            this.workAddressData = JSON.stringify(data);
            console.log('Work Address', data.geometry.location);
            this.findApartmentIsExists(data.geometry.location.lat, data.geometry.location.lng);
        }


    }

    findApartmentIsExists(lat: number, lng: number) {
        var filterResult = this._mapService.findApartmentExistsOrNot(lat, lng);
        if (filterResult.length) {
            console.log('Data', this.annualSalary);
            this.lat = lat;
            this.lng = lng;
            this.apartementData = this._mapService.mapFiterByWorkAddress(lat, lng, this.annualSalary);
            console.log('IF- Data', this.apartementData);
        }
        else {
            console.log('$$$4', this.annualSalary);
            this._mapService.$rentValue.subscribe(
                (annualSalary) => {
                    console.log('Annual Salary 1: ', annualSalary);

                    this.thresholdAmount = annualSalary / 40;

                    this.apartementData = this._mapService.mapFilter(this.thresholdAmount + 1000);

                }
            );
            console.log('Else - Data', this.annualSalary);
            this._notification.info('Search Result', 'We\'ve found 0 matching', DEFAULT_NOTIFICATION_OPTIONS);

        }

    }

    setConfiguration() {
        if (this.min !== undefined) {
            this.options.min = this.min;
        }

        if (this.max !== undefined) {
            this.options.max = this.max;
        }

        if (this.readonly !== undefined) {
            this.options.readonly = this.readonly
        }
    }

    setSliderValue() {
        this.sliderModel.setValue(24000);
    }

    public ngAfterViewInit() {


    }


    clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`);

    }

    public submitState(value: string) {
        console.log("submitState", value);
        this.appState.set("value", value);
        this.localState.value = "";
    }


}
