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
const routes: Routes =[
    { path: 'cases',          component: CasesComponent },
    { path: 'cases/caseadd',  component: CaseaddComponent},
    { path: 'cases/juniorcaseadd',  component: JuniorcaseaddComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'clients',        component: ClientsComponent },
    { path: 'clients/clients-add', component: ClientsAddComponent},
    { path: 'juniors',        component: JuniorsComponent},
    { path: 'juniors/juniors-add',    component:JuniorsAddComponent},
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
