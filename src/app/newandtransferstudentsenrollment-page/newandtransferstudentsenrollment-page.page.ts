import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newandtransferstudentsenrollment-page',
  templateUrl: './newandtransferstudentsenrollment-page.page.html',
  styleUrls: ['./newandtransferstudentsenrollment-page.page.scss'],
})
export class NewandtransferstudentsenrollmentPagePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private alertController:AlertController
  ) { }

  ngOnInit() {
  }

  goToEnrollmentInformation(){
    this.navCtrl.navigateForward('/enrollmentconfirmation-page');
  }
  
  goToSettings(){
    this.navCtrl.navigateForward('/oldstudentenrollment-page');
  }
}
