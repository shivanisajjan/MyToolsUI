import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasscentralComponent } from './classcentral.component';

describe('ClasscentralComponent', () => {
  let component: ClasscentralComponent;
  let fixture: ComponentFixture<ClasscentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasscentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasscentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
