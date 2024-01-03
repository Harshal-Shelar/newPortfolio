import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
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
