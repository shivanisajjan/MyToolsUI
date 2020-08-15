import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doc2pdfComponent } from './doc2pdf.component';

describe('Doc2pdfComponent', () => {
  let component: Doc2pdfComponent;
  let fixture: ComponentFixture<Doc2pdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doc2pdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doc2pdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
