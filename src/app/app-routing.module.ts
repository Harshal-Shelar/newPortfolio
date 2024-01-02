import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TechSkillsComponent } from './components/tech-skills/tech-skills.component';
import { EducationComponent } from './components/education/education.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { OtherSkillsComponent } from './components/other-skills/other-skills.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

const routes: Routes = [
  {path : "", redirectTo : 'profile', pathMatch : 'full'},
  {path : "profile", component : ProfileComponent},
  {path : "techSkills", component : TechSkillsComponent},
  {path : "education", component : EducationComponent},
  {path : "work", component : WorkComponent},
  {path : "projects", component : ProjectsComponent},
  {path : "resume", component : ResumeComponent},
  {path : "otherSkills", component : OtherSkillsComponent},
  {path : "contactMe", component : ContactMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
