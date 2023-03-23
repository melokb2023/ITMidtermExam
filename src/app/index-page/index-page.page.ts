import { Component, OnInit } from '@angular/core';
import {NavController,AlertController} from '@ionic/angular';
@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.page.html',
  styleUrls: ['./index-page.page.scss'],
})
export class IndexPagePage implements OnInit {

  constructor(private navCtrl: NavController, private alertController:AlertController) { }


  enrollNow(){
    this.navCtrl.navigateForward('/studentstatus-page');
  }
  
  goToSettings(){
    this.navCtrl.navigateForward('/settings-page');
  }
  
  ngOnInit() {
  }

}
