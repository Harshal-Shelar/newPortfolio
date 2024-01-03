import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkComponent } from './components/work/work.component';
import { EducationComponent } from './components/education/education.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HeaderComponent } from './components/header/header.component';
import { TechSkillsComponent } from './components/tech-skills/tech-skills.component';
import { OtherSkillsComponent } from './components/other-skills/other-skills.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProjectsComponent,
    WorkComponent,
    EducationComponent,
    ContactMeComponent,
    ResumeComponent,
    HeaderComponent,
    TechSkillsComponent,
    OtherSkillsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
