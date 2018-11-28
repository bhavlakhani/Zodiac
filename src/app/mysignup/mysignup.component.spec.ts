import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysignupComponent } from './mysignup.component';

describe('MysignupComponent', () => {
  let component: MysignupComponent;
  let fixture: ComponentFixture<MysignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
