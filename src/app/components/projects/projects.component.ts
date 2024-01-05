import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  opacityNew : any;
  constructor(private router : Router, private pdfService : PdfService) { }

  ngOnInit(): void {
    this.pdfService.topBar.subscribe(value => {
      this.opacityNew = value;
   });
  }

  openSourceCode(type : any){
    if(type === 'MERN'){
      window.open("https://github.com/Harshal-Shelar/MERN-Login-CRUD");
    }
    if(type === 'MEAN'){
      window.open("https://github.com/Harshal-Shelar/MEAN-CRUD");
    }
  }

}
