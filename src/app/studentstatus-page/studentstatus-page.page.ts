import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-studentstatus-page',
  templateUrl: './studentstatus-page.page.html',
  styleUrls: ['./studentstatus-page.page.scss'],
})
export class StudentstatusPagePage implements OnInit {

  selectedOption:string = '';

  
constructor(
    private navCtrl: NavController,
    private alertController:AlertController
  ) { }

  ngOnInit() {
  }

  checkRadioValue(){
    

}
goToSettings(){
  this.navCtrl.navigateForward('/settings-page');
}
  
  goToPage2(){
    this.navCtrl.navigateForward('/oldstudentenrollment-page');
  }
 
}
