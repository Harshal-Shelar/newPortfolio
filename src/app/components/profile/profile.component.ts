import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  openPopup : any;
  constructor(private pdfService : PdfService) { }

  ngOnInit(): void {
  }

  openPopupFun(){
    this.openPopup = true;
    this.pdfService.setdata(true);
  }

  closePopupFun(){
    this.openPopup = false;
    this.pdfService.setdata(false);
  }
}
