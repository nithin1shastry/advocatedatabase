import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ClientsComponent } from './clients/clients.component';
import { CasesComponent } from './cases/cases.component';
import { CaseaddComponent } from './caseadd/caseadd.component';
import { JuniorsComponent } from './juniors/juniors.component';
import { JuniorcaseaddComponent } from './juniorcaseadd/juniorcaseadd.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { JuniorsAddComponent } from './juniors-add/juniors-add.component';
import { CaseDetailComponentComponent } from './case-detail-component/case-detail-component.component';
import { JuniorCaseDetailComponent } from '/home/nithin/Project/angular/material-dashboard-angular2-v1.4.2/src/app/junior-case-detail/junior-case-detail.component';
import { ClientDetailComponentComponent } from './client-detail-component/client-detail-component.component';
import { JuniorDetailComponent } from'/home/nithin/Project/angular/material-dashboard-angular2-v1.4.2/src/app/junior-detail/junior-detail.component';
const routes: Routes =[
    { path: 'cases',          component: CasesComponent },
    { path: 'cases/caseadd',  component: CaseaddComponent},
    { path: 'cases/detail/:id',  component: JuniorCaseDetailComponent},
    { path: 'cases/juniorcaseadd',  component: JuniorcaseaddComponent},
    { path: 'cases/jundetail/:id',  component: CaseDetailComponentComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'clients',        component: ClientsComponent },
    { path: 'clients/clients-add', component: ClientsAddComponent},
    { path: 'clients/detail/:id',  component: ClientDetailComponentComponent},
    { path: 'juniors',        component: JuniorsComponent},
    { path: 'juniors/juniors-add',    component:JuniorsAddComponent},
    { path: 'juniors/detail/:id',  component: JuniorDetailComponent},
    { path: '',               redirectTo: 'cases', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
