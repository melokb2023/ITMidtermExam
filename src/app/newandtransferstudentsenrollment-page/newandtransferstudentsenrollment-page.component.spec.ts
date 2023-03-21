import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewandtransferstudentsenrollmentPageComponent } from './newandtransferstudentsenrollment-page.component';

describe('NewandtransferstudentsenrollmentPageComponent', () => {
  let component: NewandtransferstudentsenrollmentPageComponent;
  let fixture: ComponentFixture<NewandtransferstudentsenrollmentPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewandtransferstudentsenrollmentPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewandtransferstudentsenrollmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
