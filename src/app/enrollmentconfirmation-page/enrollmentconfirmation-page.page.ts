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
 selectedOption: string ='navigationExtras;'
 selectedOption2: string ='navigationExtras;'
 userInput1: string = 'navigationExtras';
 userInput2: string = 'navigationExtras';
 userInput3: string = 'navigationExtras';
 userInput4: string = 'navigationExtras';
 userInput5: string = 'navigationExtras';
 userInput6: string = 'navigationExtras';
 userInput7: string = 'navigationExtras';
 userInput8: string = 'navigationExtras';
 checkbox1: string ='navigationExtras';
 checkbox2: string ='navigationExtras';
 checkbox3: string ='navigationExtras';
 checkbox4: string ='navigationExtras';
 checkbox5: string ='navigationExtras';
 checkbox6: string ='navigationExtras';
 checkbox7: string ='navigationExtras';
 checkbox8: string ='navigationExtras';
 checkbox9:string ='navigationExtras';
 checkbox10:string ='navigationExtras';
 checkbox11:string ='navigationExtras';
 checkbox12:string ='navigationExtras';
 checkbox13:string ='navigationExtras';
 checkbox14:string ='navigationExtras';
 checkbox15:string ='navigationExtras';
 checkbox16:string ='navigationExtras';
 checkbox17:string ='navigationExtras';
 checkbox18:string ='navigationExtras';
 checkbox19:string ='navigationExtras';
 checkbox20:string ='navigationExtras';
 checkbox21:string ='navigationExtras';
 checkbox22:string ='navigationExtras';
 checkbox23:string ='navigationExtras';
 checkbox24:string ='navigationExtras';
 selectedOptions: any;
 
 
constructor(
    private navCtrl: NavController,
    private alertController:AlertController,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.selectedOption = params['selectedOption'];
      this.selectedOption2 = params['selectedOption2'];
      this.userInput1 = params['userInput1'];
      this.userInput2 = params['userInput2'];
      this.userInput3 = params['userInput3'];
      this.userInput4 = params['userInput4'];
      this.userInput5 = params['userInput5'];
      this.userInput6 = params['userInput6'];
      this.userInput7 = params['userInput7'];
      this.userInput8 = params['userInput8'];
      this.selectedOptions = JSON.parse(params['selectedOptions']);
    })
  }
  
  
 
  goBack(){
    this.navCtrl.navigateBack('/oldstudentenrollment-page');
  }
  goBack2(){
    this.navCtrl.navigateBack('/newandtransferstudentenrollment-page');
  }

  goToSuccess(){
    this.navCtrl.navigateForward('/enrollmentsucessfulinformation-page');
  }
  goToSettings(){
    this.navCtrl.navigateForward('/settings-page');
  }


}
