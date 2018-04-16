import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { dateSortValue } from 'ionic-angular/util/datetime-util';
import { Provider } from '../../providers/provider/provider';
/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  weather:any;
   datas : {
     city: string,
     state: string
    
   };
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: Provider) {
    console.log('the constructeur is running');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
    this.datas = {
      city: 'Miama',
      state: 'FL'
    }
     this.provider.getWeather().subscribe(weather => {
         this.weather = this.weather.current_observations;
    });
  }
   
}
