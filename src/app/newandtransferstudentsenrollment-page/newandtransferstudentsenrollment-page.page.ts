import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-newandtransferstudentsenrollment-page',
  templateUrl: './newandtransferstudentsenrollment-page.page.html',
  styleUrls: ['./newandtransferstudentsenrollment-page.page.scss'],
})
export class NewandtransferstudentsenrollmentPagePage implements OnInit {

  userInput1: any ='';
  userInput2: any ='';
  userInput3:any ='';
  userInput4:any ='';
  userInput5:any ='';
  userInput6:any ='';
  userInput7:any ='';
  userInput8:any ='';
  selectedOption:string = '';
  selectedOption2:string = '';
  option1: boolean = false;
  option2: boolean = false;
  option3: boolean = false;
  option4: boolean = false;
  option5: boolean = false;
  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;
  checkbox4: boolean = false;
  checkbox5: boolean = false;
  checkbox6: boolean = false;
  checkbox7: boolean = false;
  checkbox8: boolean = false;

  constructor(
    private navCtrl: NavController,
    private alertController:AlertController
  ) { }

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

      let selectedOptions = {
         option1: this.option1,
         option2: this.option2,
         option3: this.option3,
         option4: this.option4,
         checkbox1:this.checkbox1,
         checkbox2:this.checkbox2,
         checkbox3:this.checkbox3,
         checkbox4:this.checkbox4,
         checkbox5:this.checkbox5,
         checkbox6:this.checkbox6,
         checkbox7:this.checkbox7,
         checkbox8:this.checkbox8,

      };

      const navigationExtras = {
        queryParams: {
          selectedOption:this.selectedOption,
          selectedOption2:this.selectedOption2,
          selectedOptions:JSON.stringify(selectedOptions),
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
    this.navCtrl.navigateForward('/oldstudentenrollment-page');
  }
}
