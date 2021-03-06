import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { CasesComponent } from './cases/cases.component';
import { CaseaddComponent } from './caseadd/caseadd.component';
import { JuniorsComponent } from './juniors/juniors.component';
import { ClientsComponent } from './clients/clients.component';
import { JuniorcaseaddComponent } from './juniorcaseadd/juniorcaseadd.component';
//import { ClientsAddComponent } from './clients-add/clients-add.component';
import { JuniorsAddComponent } from './juniors-add/juniors-add.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { CaseDetailComponentComponent } from './case-detail-component/case-detail-component.component';
import { ClientDetailComponentComponent } from './client-detail-component/client-detail-component.component';
import { JuniorCaseDetailComponent } from './junior-case-detail/junior-case-detail.component';
import { JuniorDetailComponent } from './junior-detail/junior-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CasesComponent,
    CaseaddComponent,
    JuniorsComponent,
    ClientsComponent,
    JuniorcaseaddComponent,
    ClientsAddComponent,
    JuniorsAddComponent,
    CaseDetailComponentComponent,
    ClientDetailComponentComponent,
    JuniorCaseDetailComponent,
    JuniorDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
