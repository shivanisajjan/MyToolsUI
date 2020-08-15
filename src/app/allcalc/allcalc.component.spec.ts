import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcalcComponent } from './allcalc.component';

describe('AllcalcComponent', () => {
  let component: AllcalcComponent;
  let fixture: ComponentFixture<AllcalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
