import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrimerComponente } from '../../components/foo';
import { UserService } from '../../pages/services/user';


@Component({
    selector: 'resultado',
    templateUrl: 'resultado.html'
})


export class ResultadoPage {

    public recibe: any;
    public sexo: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams, public userSrv: UserService) {
            console.log(this.navParams.get('dato'));
        this.recibe = this.navParams.get('dato');
        this.sexo = this.recibe.curp[10];
        if(this.sexo=='M')
        this.userSrv.sexo = true;
        else
        this.userSrv.sexo = false;
    }

}
