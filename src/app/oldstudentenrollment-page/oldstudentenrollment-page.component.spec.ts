import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OldstudentenrollmentPageComponent } from './oldstudentenrollment-page.component';

describe('OldstudentenrollmentPageComponent', () => {
  let component: OldstudentenrollmentPageComponent;
  let fixture: ComponentFixture<OldstudentenrollmentPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OldstudentenrollmentPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OldstudentenrollmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
