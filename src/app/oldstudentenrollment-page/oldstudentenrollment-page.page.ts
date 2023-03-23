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

  userInput1:string='';
  userInput2:string='';
  userInput3:string='';
  userInput4:string='';
  userInput5:string='';
  userInput6:string='';
  userInput7:string='';
  userInput8:string='';
  
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
          userInput1 : this.userInput1,
          userInput2 : this.userInput2,
          userInput3 : this.userInput3,
          userInput4 : this.userInput4,
          userInput5 : this.userInput5,
          userInput6 : this.userInput6,
          userInput7 : this.userInput7,
          userInput8 : this.userInput8,
          }
      }
  this.navCtrl.navigateForward('/enrollmentconfirmation-page');
  }

  goToSettings(){
    this.navCtrl.navigateForward('/settings-page');
  }


}


