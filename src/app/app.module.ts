import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SalePage } from '../pages/sale/sale';
import { SucrePage } from '../pages/sucre/sucre';
import { GateauPage } from '../pages/gateau/gateau';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
    apiKey: "AIzaSyC_CPv3rpaUwAkRWxnv4dIZUIqJY4JlDxc",
    authDomain: "projetmultimedia-3e9a2.firebaseapp.com",
    databaseURL: "https://projetmultimedia-3e9a2.firebaseio.com",
    projectId: "projetmultimedia-3e9a2",
    storageBucket: "projetmultimedia-3e9a2.appspot.com",
    messagingSenderId: "257832514210"
};




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    SalePage,
    SucrePage,
    GateauPage,
    ContactPage,
    AboutPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    SalePage,
    SucrePage,
    GateauPage,
    ContactPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
