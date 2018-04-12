import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../pages/services/user';

@Component({
    selector: 'primer-componente',
    templateUrl: 'foo.html'
})

export class PrimerComponente {


    public data:any = {
        valor: false
    }

 

    constructor(public navParams:NavParams,
        public navCtrl: NavController, 
        public userSrv: UserService) { 
        console.log(this.data.valor);
        if(this.userSrv.sexo)
        {
        console.log('Sexo en primer componente '+this.userSrv.sexo);
        this.data.valor = true;
        }else{
        this.data.valor = false;}

        console.log("valor :"+this.data.valor);
     
    }



}