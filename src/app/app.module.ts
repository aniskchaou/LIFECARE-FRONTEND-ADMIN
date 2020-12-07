import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';
import { InvoiceComponent } from './content/invoice/invoice.component';
import { MedicamentComponent } from './content/medicament/medicament.component';
import { ServiceComponent } from './content/service/service.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { HeaderComponent } from './template/header/header.component';
import { DepartementComponent } from './content/departement/departement.component';
import { MedecinComponent } from './content/medecin/medecin.component';
import { PatientComponent } from './content/patient/patient.component';
import { DocumentComponent } from './content/document/document.component';
import { ProgramComponent } from './content/program/program.component';
import { RendezVousComponent } from './content/rendez-vous/rendez-vous.component';
import { PrescriptionComponent } from './content/prescription/prescription.component';
import { AccountComponent } from './content/account/account.component';
import { PaymentComponent } from './content/payment/payment.component';
import { InsuranceComponent } from './content/insurance/insurance.component';
import { AccountantComponent } from './content/accountant/accountant.component';
import { LaboratoryComponent } from './content/laboratory/laboratory.component';
import { NurseComponent } from './content/nurse/nurse.component';
import { PharmasistComponent } from './content/pharmasist/pharmasist.component';
import { RecepionistComponent } from './content/recepionist/recepionist.component';
import { BirthdayComponent } from './content/birthday/birthday.component';
import { DeadComponent } from './content/dead/dead.component';
import { CategorieComponent } from './content/categorie/categorie.component';
import { IvestigationComponent } from './content/ivestigation/ivestigation.component';
import { OperatorComponent } from './content/operator/operator.component';

const routes:Routes=[
  {path:'invoice',component:InvoiceComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'service',component:ServiceComponent},
  {path:'accountant',component:AccountantComponent},
  {path:'birth',component:BirthdayComponent},
  {path:'category',component:CategorieComponent},
  {path:'dead',component:DeadComponent},
  {path:'medicament',component:MedicamentComponent},
  {path:'departement',component:DepartementComponent},
  {path:'document',component:DocumentComponent},
  {path:'insurance',component:InsuranceComponent},
  {path:'laboratory',component:LaboratoryComponent},
  {path:'insurance',component:InsuranceComponent},
  {path:'medecin',component:MedecinComponent},
  {path:'medicament',component:MedicamentComponent},
  {path:'nurse',component:NurseComponent},
  {path:'operator',component:OperatorComponent},
  {path:'patient',component:PatientComponent},
  {path:'payment',component:PaymentComponent},
  {path:'pharmasist',component:PharmasistComponent},
  {path:'prescription',component:PrescriptionComponent},
  {path:'program',component:ProgramComponent},
  {path:'receptionist',component:RecepionistComponent},
  {path:'rendezvous',component:RendezVousComponent},
  {path:'insurance',component:InsuranceComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'**',redirectTo:'dashboard',pathMatch:'full'}]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InvoiceComponent,
    MedicamentComponent,
    ServiceComponent,
    DashboardComponent,
    HeaderComponent,
    DepartementComponent,
    MedecinComponent,
    PatientComponent,
    DocumentComponent,
    ProgramComponent,
    RendezVousComponent,
    PrescriptionComponent,
    AccountComponent,
    PaymentComponent,
    InsuranceComponent,
    AccountantComponent,
    LaboratoryComponent,
    NurseComponent,
    PharmasistComponent,
    RecepionistComponent,
    BirthdayComponent,
    DeadComponent,
    CategorieComponent,
    IvestigationComponent,
    OperatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
