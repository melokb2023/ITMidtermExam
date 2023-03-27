import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.page.html',
  styleUrls: ['./settings-page.page.scss'],
 
})
export class SettingsPagePage implements OnInit {

  toggleLabel='DARK MODE';
  rangeValue: number = 10;

constructor(
  private navCtrl: NavController,
  private alertController:AlertController
) { }

  ngOnInit() {
  }

  LightDarkMode(event: CustomEvent){
    if(event.detail.checked){
      this.toggleLabel = 'LIGHT MODE';
    }
    else{
      this.toggleLabel = 'DARK MODE';
    }
  }
  
  goToMainMenu(){
    this.navCtrl.navigateForward('/index-page');
  }

  goToEnrollment(){
    this.navCtrl.navigateForward('/studentstatus-page');
  }
  
 


}
