import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/pdf.service';
declare const PDFObject: any;
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  pdfData : any;
  pdfObject : any;
  isLoading :any = false;
  constructor(private pdfService: PdfService, private router : Router) { }

  ngOnInit(): void {
  }

}
