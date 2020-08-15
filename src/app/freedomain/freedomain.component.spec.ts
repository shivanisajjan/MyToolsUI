import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreedomainComponent } from './freedomain.component';

describe('FreedomainComponent', () => {
  let component: FreedomainComponent;
  let fixture: ComponentFixture<FreedomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreedomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreedomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
