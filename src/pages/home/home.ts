import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultadoPage } from '../result/resultado'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public dato: any = {
    curp: ''
  };

 

  constructor(public navCtrl: NavController) {
    
  }

  goResult(){
    this.navCtrl.push(ResultadoPage,{dato: this.dato});
  }

}
