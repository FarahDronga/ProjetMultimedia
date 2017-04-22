import { Component } from '@angular/core';

import {GooglePlus} from 'ionic-native';
import { NavController, AlertController, Platform,MenuController } from 'ionic-angular';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods,AngularFire } from 'angularfire2';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

private authState: FirebaseAuthState;
  
  constructor(public navCtrl: NavController, public af: AngularFire,
        public alertController : AlertController,
        private platform: Platform,public auth$: AngularFireAuth,public menuCtrl: MenuController )
  {


 this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });

 //this.menuCtrl.enable(false, 'myMenu');

  }


//********************** */


  ionViewDidEnter() {
    //to disable menu, or
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // to enable menu.
    this.menuCtrl.enable(true);



  }


  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    console.log("clicked !");
    
    return this.auth$.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
  }



  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    console.log("clicked !");
    
    return this.auth$.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then((_user) => {
    console.log("_user:", _user);
    this.navCtrl.setRoot(HomePage);
  })
  .catch((_error) => {
    console.error("Error:", _error);
  });

    //this.navCtrl.push(SecondPage);
  }

}