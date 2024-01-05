import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openNav : any;
  opacityNew : any;
  constructor(private pdfService : PdfService) { }

  ngOnInit(): void {
    this.pdfService.change.subscribe(value => {
      this.opacityNew = value;
   });
  }

  openHideNav(){
    this.openNav = true;
    this.pdfService.setTopBar(true);
  }

  closeHideNav(){
    this.openNav = false;
    this.pdfService.setTopBar(false);
  }
}
