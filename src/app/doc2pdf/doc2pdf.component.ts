import { Component, OnInit } from '@angular/core';
import { FileRestrictions } from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-doc2pdf',
  templateUrl: './doc2pdf.component.html',
  styleUrls: ['./doc2pdf.component.css']
})
export class Doc2pdfComponent implements OnInit {
  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  myRestrictions: FileRestrictions = {
    allowedExtensions: ['.doc', '.docx']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
