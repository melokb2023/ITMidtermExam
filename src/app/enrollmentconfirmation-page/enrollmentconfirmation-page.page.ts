import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enrollmentconfirmation-page',
  templateUrl: './enrollmentconfirmation-page.page.html',
  styleUrls: ['./enrollmentconfirmation-page.page.scss'],
})
export class EnrollmentconfirmationPagePage implements OnInit {
 userInput1: string = 'navigationExtras';
 userInput2: string = 'navigationExtras';
 userInput3: string = 'navigationExtras';
 userInput4: string = 'navigationExtras';
 userInput5: string = 'navigationExtras';
 userInput6: string = 'navigationExtras';
 userInput7: string = 'navigationExtras';
 userInput8: string = 'navigationExtras';
  
 
 
constructor(
    private navCtrl: NavController,
    private alertController:AlertController,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.userInput1 = params['userInput1'];
      this.userInput2 = params['userInput2'];
      this.userInput3 = params['userInput3'];
      this.userInput4 = params['userInput4'];
      this.userInput5 = params['userInput5'];
      this.userInput6 = params['userInput6'];
      this.userInput7 = params['userInput7'];
      this.userInput8 = params['userInput8'];
    })
  }

 
  goBack(){
    this.navCtrl.navigateBack('/oldstudentenrollment-page');
  }

  goToSuccess(){
    this.navCtrl.navigateForward('/enrollmentsucessfulinformation-page');
  }



}
