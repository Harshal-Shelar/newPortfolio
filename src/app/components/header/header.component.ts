import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openNav : any;
  constructor() { }

  ngOnInit(): void {
  }

  openHideNav(){
    this.openNav = !this.openNav;
  }
}
