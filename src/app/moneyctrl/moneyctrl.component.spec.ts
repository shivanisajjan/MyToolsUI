import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyctrlComponent } from './moneyctrl.component';

describe('MoneyctrlComponent', () => {
  let component: MoneyctrlComponent;
  let fixture: ComponentFixture<MoneyctrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyctrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyctrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
