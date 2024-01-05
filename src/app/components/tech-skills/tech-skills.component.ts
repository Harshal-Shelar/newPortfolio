import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent implements OnInit {

  opacityNew : any;
  constructor(private pdfService : PdfService) { }

  ngOnInit(): void {
    this.pdfService.topBar.subscribe(value => {
      this.opacityNew = value;
   });
  }

}
