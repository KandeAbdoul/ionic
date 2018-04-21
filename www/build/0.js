webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteoPageModule", function() { return MeteoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meteo__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MeteoPageModule = /** @class */ (function () {
    function MeteoPageModule() {
    }
    MeteoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__meteo__["a" /* MeteoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__meteo__["a" /* MeteoPage */]),
            ],
        })
    ], MeteoPageModule);
    return MeteoPageModule;
}());

//# sourceMappingURL=meteo.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeteoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_provider_provider__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { dateSortValue } from 'ionic-angular/util/datetime-util';


var MeteoPage = /** @class */ (function () {
    function MeteoPage(navCtrl, navParams, provider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.storage = storage;
        this.datas = {
            current_observation: {
                display_location: {}
            }
        };
        console.log('the constructeur is running');
    }
    MeteoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MeteoPage');
        this.storage.get('location').then(function (val) {
            if (val != null) {
                _this.location = JSON.parse(val);
            }
            else {
                _this.location = {
                    country: 'FL',
                    city: 'Miami'
                };
            }
            _this.provider.getWeather(_this.location.country, _this.location.city).subscribe(function (weather) {
                _this.datas = weather;
                console.log(_this.datas.current_observation);
            });
        });
    };
    MeteoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-meteo',template:/*ion-inline-start:"/home/kande-abdoul/Documents/cours perso/Application/Ionic/Demo/src/pages/meteo/meteo.html"*/'<!--\n  Generated template for the MeteoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <ion-title>meteo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content overflow-scroll="false">\n   <ion-grid>\n     <ion-row>\n       <ion-col width-50 offset-25>\n         <h2 class="title">{{datas.current_observation.display_location.full}}</h2>\n         <div class="icon"><img src="{{datas.current_observation.icon_url}}" alt=""></div>\n         <h2>{{datas.current_observation.weather}}</h2>  \n        <ion-list>\n          <ion-item>\n            <strong>Température: </strong>{{datas.current_observation.temperature_string}}\n          </ion-item>\n          <ion-item>\n            <strong>Humidité: </strong>{{datas.current_observation.relative_humidity}}\n          </ion-item>\n          <ion-item>\n            <strong>Dewpoint: </strong>{{datas.current_observation.dewpoint_string}}\n          </ion-item>\n          <ion-item>\n            <strong>visibility: </strong>{{datas.current_observation.visibility_mi}}\n          </ion-item>\n      </ion-list>\n       </ion-col>\n\n     </ion-row>\n   </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/kande-abdoul/Documents/cours perso/Application/Ionic/Demo/src/pages/meteo/meteo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_provider_provider__["a" /* Provider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MeteoPage);
    return MeteoPage;
}());

//# sourceMappingURL=meteo.js.map

/***/ })

});
//# sourceMappingURL=0.js.map