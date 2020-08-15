import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmeComponent } from './gme.component';

describe('GmeComponent', () => {
  let component: GmeComponent;
  let fixture: ComponentFixture<GmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
