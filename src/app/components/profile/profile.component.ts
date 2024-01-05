import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  openPopup : any;
  opacityNew : any;
  constructor(private pdfService : PdfService) { }

  ngOnInit(): void {
    this.pdfService.topBar.subscribe(value => {
      this.opacityNew = value;
   });
  }

  openPopupFun(){
    this.openPopup = true;
    this.pdfService.setdata(true);
  }

  closePopupFun(){
    this.openPopup = false;
    this.pdfService.setdata(false);
  }

  openLinkedIn(){
    window.open("https://www.linkedin.com/in/harshal-shelar-a562b8154/");
  }

  opengithub(){
    window.open("https://github.com/Harshal-Shelar");
  }

  openMap(){
    window.open("https://www.google.com/maps/place/Shikhare+Trust+Jayant+Netralay/@16.9500702,74.4086918,71m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3bc111e21abf1ae1:0xa916a0d611d975bc!2sAshta,+Maharashtra+416301!3b1!8m2!3d16.9483056!4d74.4115246!16s%2Fm%2F02wwg_y!3m5!1s0x3bc111e3b3000005:0x1dab6f83f3c7c8d!8m2!3d16.9500802!4d74.4087354!16s%2Fg%2F11hcjvrsqs?entry=ttu")
  }
}
