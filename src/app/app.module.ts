import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { UserService } from "../pages/services/user";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResultadoPage } from '../pages/result/resultado';
import { PrimerComponente}  from '../components/foo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultadoPage,
    PrimerComponente

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultadoPage,
    PrimerComponente
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
