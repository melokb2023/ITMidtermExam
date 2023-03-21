import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnrollmentsucessfulinformationPageComponent } from './enrollmentsucessfulinformation-page.component';

describe('EnrollmentsucessfulinformationPageComponent', () => {
  let component: EnrollmentsucessfulinformationPageComponent;
  let fixture: ComponentFixture<EnrollmentsucessfulinformationPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentsucessfulinformationPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollmentsucessfulinformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
