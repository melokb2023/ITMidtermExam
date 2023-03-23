import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-enrollmentsucessfulinformation-page',
  templateUrl: './enrollmentsucessfulinformation-page.page.html',
  styleUrls: ['./enrollmentsucessfulinformation-page.page.scss'],
})
export class EnrollmentsucessfulinformationPagePage implements OnInit {

  constructor(private navCtrl: NavController, private alertController:AlertController) { }


  ngOnInit() {
  }

  goToIndex(){
    this.navCtrl.navigateBack('/index-page');
  }

  goToSettings(){
    this.navCtrl.navigateBack('/settings-page');
  }

}
