import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    private _sexo:boolean;

    constructor(){

    }


    set sexo (newVal:boolean){
        this._sexo = newVal;
    }

 
    get sexo(){
        return this._sexo;
    }

}