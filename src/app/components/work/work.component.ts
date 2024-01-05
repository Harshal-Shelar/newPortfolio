import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/pdf.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  openPopup : any;
  title : any;
  compDetails : any;
  technology : any;
  date : any;
  disg : any;

  constructor(private pdfService : PdfService) { }

  ngOnInit(): void {
  }

  openPopupFun(type:any){
    this.pdfService.setdata(true);

    if(type === 'Aquarious'){
      this.openPopup = true;
      this.title = "Aquarious Technology";
      this.disg = 'MEAN Stack Developer';
      this.compDetails = [
        {name : 'Created Angular-based responsive web application from scratch where admin and user have login and sign-up credentials'},
        {name : 'Admin can manage the property listed and the user can buy these properties with the facilities listed by the admin, and Admin can go through the complaints registered by the user'},
        {name : 'Worked on performance improvement and speed optimization and boosted network, and system availability through preventive maintenance & upgrades.'},
        {name : 'Worked with back-end developers to integrate with APIs to manipulate asynchronous data and used GitHub to maintain the versions of code.'},
      ];
      this.technology = [
        {frontEnd : 'Angular 14', backend : 'Node Js', database : 'MongoDB'}
      ];
      this.date = 'May 2023 to Aug 2023';
    }
    if(type === 'Fintech'){
      this.openPopup = true;
      this.title = "Fintech Global Center";
      this.disg = 'Front End Developer';
      this.compDetails = [
        {name : 'Developed NoCode responsive web application which is an Angular based project that is created to reduce the workload of creating applications with or without buying domains through programming.'},
        {name : 'Designed reusable and reliable code for use within a distributed cloud environments and to maintain the versions of code on GitLab.'},
        {name : 'Organized this project in such a way that you can create your own style application according to your needs to create n number of applications.'},
      ];
      this.technology = [
        {frontEnd : 'Angular 13', backend : 'Node Js', database : 'MongoDB'}
      ];
      this.date = 'Nov 2022 to Mar 2023';
    }
    if(type === 'Intellect'){
      this.openPopup = true;
      this.title = "Intellect Design Arena";
      this.disg = 'Software Engineer';
      this.compDetails = [
        {name : 'The Product is designed to be used to give the decision of Pay or No Pay whether the transaction can be done or not depending on the Limits and Balances in the account.'},
        {name : 'Revised, debugged, and updated old code bases to modern development standards, reducing operating costs, and improving functionality.'},
        {name : 'My Role:- Created a tree structure that shows the hierarchy of Customer Group, Customer, Account Group, and Account, which represents the tree structure of limits and balances of children and parents.'},
      ];
      this.technology = [
        {frontEnd : 'Angular 8', backend : 'Spring Boot', database : 'PostgreSQL'}
      ];
      this.date = 'July 2021 to Sept 2022';
    }
  }

  closePopup(){
    this.pdfService.setdata(false);
    this.openPopup = false;
    this.compDetails = [];
    this.technology = [];
  }
}
