import { Component,ViewChild } from '@angular/core';
import { NavController,Nav, Platform } from 'ionic-angular';

import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   @ViewChild(Nav) nav: Nav;


  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {


  this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'farah', component: ListPage }
    ];
  }



   openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }




  

}
