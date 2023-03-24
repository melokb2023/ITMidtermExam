import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-oldstudentenrollment-page',
  templateUrl: './oldstudentenrollment-page.page.html',
  styleUrls: ['./oldstudentenrollment-page.page.scss'],
})
export class OldstudentenrollmentPagePage implements OnInit {

  userInput1: any ='';
  userInput2: any ='';
  userInput3:any ='';
  userInput4:any ='';
  userInput5:any ='';
  userInput6:any ='';
  userInput7:any ='';
  userInput8:any ='';
  
  constructor(private navCtrl: NavController,
    private alertController:AlertController) { }



  ngOnInit() {
  }
  checkInformation(){
    const userInput1 = document.getElementById('userInput1') as HTMLIonInputElement;
    const userInput2 = document.getElementById('userInput2') as HTMLIonInputElement;
    const userInput3 = document.getElementById('userInput3') as HTMLIonInputElement;
    const userInput4 = document.getElementById('userInput4') as HTMLIonInputElement;
    const userInput5 = document.getElementById('userInput5') as HTMLIonInputElement;
    const userInput6 = document.getElementById('userInput6') as HTMLIonInputElement;
    const userInput7 = document.getElementById('userInput7') as HTMLIonInputElement;
    const userInput8 = document.getElementById('userInput8') as HTMLIonInputElement;

    if (!userInput1.value || !userInput2.value || !userInput3.value || !userInput4.value || !userInput5.value || !userInput6.value || !userInput7.value || !userInput8.value){
      const alert = this.alertController.create({
        message:'Please fill up the following form.All of these are required.',
        buttons: ['OK'],
      });
      alert.then((alert) => alert.present());
    }

    else{
      this.goToEnrollmentInformation();
    }
  }

  goToEnrollmentInformation(){
      const userInput1 = (document.getElementById('userInput1') as HTMLInputElement).value;
      const userInput2 = (document.getElementById('userInput2') as HTMLInputElement).value;
      const userInput3 = (document.getElementById('userInput3') as HTMLInputElement).value;
      const userInput4 = (document.getElementById('userInput4') as HTMLInputElement).value;
      const userInput5 = (document.getElementById('userInput5') as HTMLInputElement).value;
      const userInput6 = (document.getElementById('userInput6') as HTMLInputElement).value;
      const userInput7 = (document.getElementById('userInput7') as HTMLInputElement).value;
      const userInput8 = (document.getElementById('userInput8') as HTMLInputElement).value; 

      const navigationExtras = {
        queryParams: {
          userInput1 : userInput1,
          userInput2 : userInput2,
          userInput3 : userInput3,
          userInput4 : userInput4,
          userInput5 : userInput5,
          userInput6 : userInput6,
          userInput7 : userInput7,
          userInput8 : userInput8,
          }
      }

      this.navCtrl.navigateForward('/enrollmentconfirmation-page',navigationExtras);
  }

  goToSettings(){
    this.navCtrl.navigateForward('/settings-page');
  }


}


