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
  detailsArray : any = [];
  openPopup :any;
  heading :any

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

  showDetails(type : any){
    this.openPopup = true;
    this.pdfService.setdata(true);
    if(type === 'MERN'){
      this.heading = 'MERN Stack CRUD Application with Login and Register';
      this.detailsArray = [
        {name : 'User can register new account.'},
        {name : 'Already registered user can directly login to the system using username and password.'},
        {name : 'Logged in user can perform the CRUD operation.'},
        {name : 'User can create new record also update the existing record and delete the record.'},
        {name : 'Every user has its own user id and own number of record to perform the CRUD operation.'},
      ]
    }
    if(type === 'MEAN'){
      this.heading = 'Student Record Keeping (Freelance)';
      this.detailsArray = [
        {name : 'Admin can create new Record of student.'},
        {name : 'He can also upload the image.'},
        {name : 'The list of students will be displayed in tabuler format.'},
        {name : 'The Image of student will be shown in the table with other information of student.'},
        {name : 'Admin can update the record of perticular existing student and delete the record accoording to the need.'},
      ]
    }
    if(type === 'Snippet'){
      this.heading = 'Snippet Visualization System (College Project)';
      this.detailsArray = [
        {name : 'We introduced Snippet visualization technique to visualize the collection of textual resul returned from web a query. The method builds meaningful layouts that optimize the placement of snippets that considers both overlapping removal and preservation of neighborhood structures.'},
        {name : 'Since snippet visualization system relays only on information extracted from web result, it can be plugged into search engines in a straightforward manner.'},
        {name : 'One direction that this work might continue on is to improve on the accuracy of similarity calculation between documents by employing different similarity calculation strategies.'},
        {name : 'The Image of student will be shown in the table with other information of student.'},
        {name : 'Although the current scheme proved more accurate than traditional methods, there are still room for improvement.'},
      ]
    }
  }

  closePopup(){
      this.detailsArray = [];
      this.openPopup = false;
      this.pdfService.setdata(false);
  }

}
