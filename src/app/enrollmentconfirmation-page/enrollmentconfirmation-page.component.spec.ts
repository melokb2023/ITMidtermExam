import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrollmentconfirmationPageComponent } from './enrollmentconfirmation-page.component';

describe('EnrollmentconfirmationPageComponent', () => {
  let component: EnrollmentconfirmationPageComponent;
  let fixture: ComponentFixture<EnrollmentconfirmationPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentconfirmationPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentconfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
