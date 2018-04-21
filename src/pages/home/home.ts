import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MeteoPage } from '../meteo/meteo';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  meteo:String='Skip';
  city:string;
  country:string;   
  @ViewChild(Slides) slides: Slides;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private storage : Storage
  ) {

    this.storage.get('location').then((val) => {
      if (val != null){
        let location = JSON.parse(val);
        this.city = location.city;
        this.country = location.country;
      }else{
        this.city = 'Miami';
        this.country = 'FL';
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
   saveDatas(){
    let location={
      city: this.city,
      country: this.country
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push('MeteoPage');
  }
 }

