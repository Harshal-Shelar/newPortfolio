import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrls: ['./other-skills.component.scss']
})
export class OtherSkillsComponent implements OnInit {

  redHatPopup: any = false;
  sihPopup: any = false;
  opacityNew: any;

  constructor(private router: Router, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.pdfService.topBar.subscribe(value => {
      this.opacityNew = value;
    });
  }

  openPopupFun(type: any) {
    if (type == 'redhat') {
      this.redHatPopup = true;
    }

    if (type == 'sih') {
      this.sihPopup = true;
    }
    this.pdfService.setdata(true);
  }

  closePopupFun() {
    this.redHatPopup = false;
    this.sihPopup = false;
    this.pdfService.setdata(false);
  }

}
