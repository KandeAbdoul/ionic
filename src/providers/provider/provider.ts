import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provider {
    key = 'de137a9fc49abdc7';
    url;
   
  constructor(public http: Http) {
    console.log('Hello Provider Provider');
    this.url = 'http://api.wunderground.com/api/'+ this.key +'/conditions/q';
  }
 
  getWeather(country, city){
    return this.http.get(this.url+'/'+country+'/'+city+'.json')
            .map(res => res.json());
  }
}
