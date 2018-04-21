import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { dateSortValue } from 'ionic-angular/util/datetime-util';
import { Provider } from '../../providers/provider/provider';
import { Storage } from '@ionic/storage'

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
  weather:any;
  datas : any={
    current_observation:{
      display_location:{}
    }
  };
  location : {
    country:string,
    city:string
}
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: Provider,
    private storage: Storage
  ) {
    console.log('the constructeur is running');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
    this.storage.get('location').then((val) => {
      if (val!= null){
        this.location = JSON.parse(val);
      }else{
        this.location = {
          country :'FL',
          city : 'Miami'
        }
      }

     this.provider.getWeather(this.location.country, this.location.city).subscribe((weather) => {
      this.datas = weather ;
      console.log(this.datas.current_observation);
  });   
    })
  }
}