//import { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { AccountComponent } from './modules/account/account/account.component';
import { AddAccountComponent } from './modules/account/add-account/add-account.component';
import { AddAppointmentComponent } from './modules/appointment/add-appointment/add-appointment.component';
import { RendezVousComponent } from './modules/appointment/rendez-vous/rendez-vous.component';

import { CategorieComponent } from './modules/category/categorie/categorie.component';

import { AddDepartementComponent } from './modules/departement/add-departement/add-departement.component';
import { DepartementComponent } from './modules/departement/departement/departement.component';
import { AddDoctorComponent } from './modules/doctor/add-doctor/add-doctor.component';
import { MedecinComponent } from './modules/doctor/medecin/medecin.component';
import { AddDocumentComponent } from './modules/document/add-document/add-document.component';
import { DocumentComponent } from './modules/document/document/document.component';
import { AccountantComponent } from './modules/employee/accountant/accountant.component';
import { AddEmployeeComponent } from './modules/employee/add-employee/add-employee.component';
import { LaboratoryComponent } from './modules/employee/laboratory/laboratory.component';
import { NurseComponent } from './modules/employee/nurse/nurse.component';
import { OperatorComponent } from './modules/employee/operator/operator.component';
import { PharmasistComponent } from './modules/employee/pharmasist/pharmasist.component';
import { RecepionistComponent } from './modules/employee/recepionist/recepionist.component';
import { ConfigurationComponent } from './modules/general/configuration/configuration.component';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';
import { LoginComponent } from './modules/general/login/login.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AddInvoiceComponent } from './modules/invoice/add-invoice/add-invoice.component';
import { InvoiceComponent } from './modules/invoice/invoice/invoice.component';
import { MedicamentComponent } from './modules/medicament/medicament/medicament.component';
import { AddPatientComponent } from './modules/patient/add-patient/add-patient.component';
import { PatientComponent } from './modules/patient/patient/patient.component';
import { AddPaymentComponent } from './modules/payment/add-payment/add-payment.component';
import { PaymentComponent } from './modules/payment/payment/payment.component';
import { AddPrescriptionComponent } from './modules/prescription/add-prescription/add-prescription.component';
import { PrescriptionComponent } from './modules/prescription/prescription/prescription.component';
import { AddScheduleComponent } from './modules/schedule/add-schedule/add-schedule.component';
import { ProgramComponent } from './modules/schedule/program/program.component';
import { AddServiceComponent } from './modules/service/add-service/add-service.component';
import { ServiceComponent } from './modules/service/service/service.component';
import { HeaderComponent } from './template/header/header.component';
import { NavigationComponent } from './template/navigation/navigation.component';

import { ViewDoctorComponent } from './modules/doctor/view-doctor/view-doctor.component';
import { ViewPatientComponent } from './modules/patient/view-patient/view-patient.component';
import { ViewPrescriptionComponent } from './modules/prescription/view-prescription/view-prescription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDepartementComponent } from './modules/departement/edit-departement/edit-departement.component';
import { EditMedecinComponent } from './modules/doctor/edit-medecin/edit-medecin.component';
import { EditEmployeeComponent } from './modules/employee/edit-employee/edit-employee.component';
import { EditAccountComponent } from './modules/account/edit-account/edit-account.component';
import { EditCategoryComponent } from './modules/category/edit-category/edit-category.component';
import { EditDocumentComponent } from './modules/document/edit-document/edit-document.component';
import { EditMedicamentComponent } from './modules/medicament/edit-medicament/edit-medicament.component';

import { EditInvoiceComponent } from './modules/invoice/edit-invoice/edit-invoice.component';
import { EditPatientComponent } from './modules/patient/edit-patient/edit-patient.component';
import { EditPrescriptionComponent } from './modules/prescription/edit-prescription/edit-prescription.component';
import { EditRendezvousComponent } from './modules/schedule/edit-rendezvous/edit-rendezvous.component';
import { HospitalConfigComponent } from './modules/general/hospital-config/hospital-config.component';
import { EmailConfigComponent } from './modules/general/email-config/email-config.component';
import { SystemConfigComponent } from './modules/general/system-config/system-config.component';
import { ShortcutMenuComponent } from './template/shortcut-menu/shortcut-menu.component';
import { DiagnosisComponent } from './modules/diagnosis/diagnosis/diagnosis.component';
import { InventoryComponent } from './modules/inventory/inventory/inventory.component';
import { ScheduleComponent } from './modules/schedule/schedule/schedule.component';
import { AmbulanceComponent } from './modules/ambulance/ambulance/ambulance.component';
import { DriverComponent } from './modules/driver/driver/driver.component';
import { BloodgroupComponent } from './modules/blood_group/bloodgroup/bloodgroup.component';
import { BlooddonorComponent } from './modules/bood_donor/blooddonor/blooddonor.component';
import { BlooddonationComponent } from './modules/blood_donation/blooddonation/blooddonation.component';
import { BloodComponent } from './modules/blood/blood/blood.component';
import { RadiologycategoryComponent } from './modules/radiology_category/radiologycategory/radiologycategory.component';
import { RadiologytypeComponent } from './modules/radiology_type/radiologytype/radiologytype.component';
import { RadiologyComponent } from './modules/radiology/radiology/radiology.component';
import { VaccinatedpeopleComponent } from './modules/vaccinated_people/vaccinatedpeople/vaccinatedpeople.component';
import { VaccinationComponent } from './modules/vaccination/vaccination/vaccination.component';
import { BedtypeComponent } from './modules/bed_type/bedtype/bedtype.component';
import { MedicinecategoryComponent } from './modules/medicine_category/medicinecategory/medicinecategory.component';
import { MedicinetypeComponent } from './modules/medicine_type/medicinetype/medicinetype.component';
import { MedicineComponent } from './modules/medicine/medicine/medicine.component';
import { BedComponent } from './modules/bed/bed/bed.component';
import { HttpClientModule } from '@angular/common/http';
import { TestLabComponent } from './modules/test/test-lab/test-lab.component';
import { AddDiagnosisComponent } from './modules/diagnosis/add-diagnosis/add-diagnosis.component';
import { AddInventoryComponent } from './modules/inventory/add-inventory/add-inventory.component';
import { AddTestComponent } from './modules/test/add-test/add-test.component';
import { AddAmbulanceComponent } from './modules/ambulance/add-ambulance/add-ambulance.component';
import { AddDriverComponent } from './modules/driver/add-driver/add-driver.component';
import { AddMedecineTypeComponent } from './modules/medicine_type/add-medecine-type/add-medecine-type.component';
import { AddMedecineCategoryComponent } from './modules/medicine_category/add-medecine-category/add-medecine-category.component';
import { AddBedComponent } from './modules/bed/add-bed/add-bed.component';
import { AddBedTypeComponent } from './modules/bed_type/add-bed-type/add-bed-type.component';
import { AddVaccinationComponent } from './modules/vaccination/add-vaccination/add-vaccination.component';
import { AddVaccinatedPeopleComponent } from './modules/vaccinated_people/add-vaccinated-people/add-vaccinated-people.component';
import { AddRadiologyComponent } from './modules/radiology/add-radiology/add-radiology.component';
import { AddRadiologyTypeComponent } from './modules/radiology_type/add-radiology-type/add-radiology-type.component';
import { AddRadiologyCategoryComponent } from './modules/radiology_category/add-radiology-category/add-radiology-category.component';
import { AddBloodComponent } from './modules/blood/add-blood/add-blood.component';
import { AddBloodDonationComponent } from './modules/blood_donation/add-blood-donation/add-blood-donation.component';
import { AddBloodGroupComponent } from './modules/blood_group/add-blood-group/add-blood-group.component';
import { AddBloodDonorComponent } from './modules/bood_donor/add-blood-donor/add-blood-donor.component';
import { AccountListComponent } from './modules/account/account-list/account-list.component';
import { AmbulanceListComponent } from './modules/ambulance/ambulance-list/ambulance-list.component';
import { BedListComponent } from './modules/bed/bed-list/bed-list.component';
import { BedtypeListComponent } from './modules/bed_type/bedtype-list/bedtype-list.component';
import { BloodListComponent } from './modules/blood/blood-list/blood-list.component';
import { BloodDonationListComponent } from './modules/blood_donation/blood-donation-list/blood-donation-list.component';
import { BlooddonorDonationListComponent } from './modules/bood_donor/blooddonor-donation-list/blooddonor-donation-list.component';
import { CategoryListComponent } from './modules/category/category-list/category-list.component';
import { DepartementListComponent } from './modules/departement/departement-list/departement-list.component';
import { DiagnosisListComponent } from './modules/diagnosis/diagnosis-list/diagnosis-list.component';
import { DoctorListComponent } from './modules/doctor/doctor-list/doctor-list.component';
import { DriverListComponent } from './modules/driver/driver-list/driver-list.component';
import { EmployeeListComponent } from './modules/employee/employee-list/employee-list.component';
import { ExpenseListComponent } from './modules/expense/expense-list/expense-list.component';

import { MedicamentListComponent } from './modules/medicament/medicament-list/medicament-list.component';
import { MedicineListComponent } from './modules/medicine/medicine-list/medicine-list.component';
import { MedicineCategoryListComponent } from './modules/medicine_category/medicine-category-list/medicine-category-list.component';
import { MedicineTypeListComponent } from './modules/medicine_type/medicine-type-list/medicine-type-list.component';
import { PatientListComponent } from './modules/patient/patient-list/patient-list.component';
import { RadiologyListComponent } from './modules/radiology/radiology-list/radiology-list.component';
import { RadiologyCategoryListComponent } from './modules/radiology_category/radiology-category-list/radiology-category-list.component';
import { RadiologyTypeListComponent } from './modules/radiology_type/radiology-type-list/radiology-type-list.component';
import { ServiceListComponent } from './modules/service/service-list/service-list.component';
import { TestListComponent } from './modules/test/test-list/test-list.component';
import { VaccinatedPeopleListComponent } from './modules/vaccinated_people/vaccinated-people-list/vaccinated-people-list.component';
import { VaccinationListComponent } from './modules/vaccination/vaccination-list/vaccination-list.component';
import { DoctorSpeciality } from './main/models/DoctorSpeciality';
import { AddMedicamentComponent } from './modules/medicament/add-medicament/add-medicament.component';
import { AddExpenseComponent } from './modules/income/add-expense/add-expense.component';
import { AddIncomeComponent } from './modules/income/add-income/add-income.component';
import { IncomeComponent } from './modules/income/income/income.component';
import { EditAmbulanceComponent } from './modules/ambulance/edit-ambulance/edit-ambulance.component';
import { LoadingComponent } from './template/loading/loading.component';
import { EditVaccinationComponent } from './modules/vaccination/edit-vaccination/edit-vaccination.component';
import { EditDriverComponent } from './modules/driver/edit-driver/edit-driver.component';
import { DataTablesModule } from 'angular-datatables';
import { EditBedTypeComponent } from './modules/bed_type/edit-bed-type/edit-bed-type.component';
import { EditBedComponent } from './modules/bed/edit-bed/edit-bed.component';
import { EditServiceComponent } from './modules/service/edit-service/edit-service.component';
import { EditBloodDonorComponent } from './modules/bood_donor/edit-blood-donor/edit-blood-donor.component';
import { EditBloodGroupComponent } from './modules/blood_group/edit-blood-group/edit-blood-group.component';
import { EditMedicineCategoryComponent } from './modules/medicine_category/edit-medicine-category/edit-medicine-category.component';
import { EditMedeineTypeComponent } from './modules/medicine_type/edit-medeine-type/edit-medeine-type.component';
import { PatientPaymentComponent } from './modules/patient/patient-payment/patient-payment.component';
import { DoctorScheduleComponent } from './modules/doctor/doctor-schedule/doctor-schedule.component';
import { DoctorAppointementComponent } from './modules/doctor/doctor-appointement/doctor-appointement.component';
import { DoctorHolidayComponent } from './modules/doctor/doctor-holiday/doctor-holiday.component';
import { NgxSimpleCalendarModule } from 'ngx-simple-calendar';
import { PatientHistoryComponent } from './modules/patient/patient-history/patient-history.component';
const routes: Routes = [
  { path: 'invoice', component: InvoiceComponent },
  { path: 'addinvoice', component: AddInvoiceComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'addservice', component: AddServiceComponent },
  { path: 'accountant', component: AccountantComponent },

  { path: 'category', component: CategorieComponent },

  { path: 'medicament', component: MedicamentComponent },
  { path: 'departement', component: DepartementComponent },
  { path: 'adddepartement', component: AddDepartementComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'adddocument', component: AddDocumentComponent },

  { path: 'laboratory', component: LaboratoryComponent },
  { path: 'bed-types', component: BedtypeComponent },
  { path: 'adddoctor', component: AddDoctorComponent },
  { path: 'doctor', component: MedecinComponent },
  { path: 'medicament', component: MedicamentComponent },
  { path: 'addmedicament', component: MedecinComponent },
  { path: 'nurse', component: NurseComponent },
  { path: 'operator', component: OperatorComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'addpatient', component: AddPatientComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pharmacist', component: PharmasistComponent },
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'addprescription', component: AddPrescriptionComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'receptionist', component: RecepionistComponent },
  { path: 'rendezvous', component: RendezVousComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'addrendezvous', component: AddAppointmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'system-config', component: SystemConfigComponent },
  { path: 'email-config', component: EmailConfigComponent },
  { path: 'hospital-config', component: HospitalConfigComponent },
  { path: 'account', component: AccountComponent },
  { path: 'diagnosis', component: DiagnosisComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'ambulance', component: AmbulanceComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: 'medicinetype', component: MedicinetypeComponent },
  { path: 'medicinecategory', component: MedicinecategoryComponent },
  { path: 'bed', component: BedComponent },
  { path: 'bedtype', component: BedtypeComponent },
  { path: 'vaccination', component: VaccinationComponent },
  { path: 'vaccinatedpeople', component: VaccinatedpeopleComponent },
  { path: 'radiology', component: RadiologyComponent },
  { path: 'radiologytype', component: RadiologytypeComponent },
  { path: 'radiologycategory', component: RadiologycategoryComponent },
  { path: 'addradiologycategory', component: AddRadiologyCategoryComponent },
  { path: 'addradiologytype', component: AddRadiologyTypeComponent },
  { path: 'blood', component: BloodComponent },
  { path: 'blooddonation', component: BlooddonationComponent },
  { path: 'blooddonor', component: BlooddonorComponent },
  { path: 'bloodgroup', component: BloodgroupComponent },
  { path: 'add-bed', component: AddBedComponent },
  { path: 'test-lab', component: TestLabComponent },
  { path: 'add-ambulance', component: AddAmbulanceComponent },
  { path: 'add-driver', component: AddDriverComponent },
  { path: 'add-medecine', component: AddMedicamentComponent },
  { path: 'add-medecine-type', component: AddMedecineTypeComponent },
  { path: 'add-medecine-category', component: AddMedecineCategoryComponent },
  { path: 'add-bed', component: AddBedComponent },
  { path: 'add-bed-type', component: AddBedTypeComponent },
  { path: 'add-vaccination', component: AddVaccinationComponent },
  { path: 'add-radiology', component: AddVaccinationComponent },
  { path: 'add-blood-group', component: AddBloodGroupComponent },
  { path: 'add-blood-donor', component: AddBloodDonorComponent },
  { path: 'add-payment', component: AddPaymentComponent },
  { path: 'payments', component: PaymentComponent },
  { path: 'add-income', component: AddIncomeComponent },
  { path: 'incomes', component: IncomeComponent },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'add-diagnosis', component: AddDiagnosisComponent },
  { path: 'add-test-lab', component: AddTestComponent },
  { path: 'addvaccinatedpeople', component: AddVaccinatedPeopleComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

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
    EditVaccinationComponent,
    AccountantComponent,
    LaboratoryComponent,
    NurseComponent,
    PharmasistComponent,
    RecepionistComponent,

    CategorieComponent,

    OperatorComponent,
    LoginComponent,
    ConfigurationComponent,
    AddDepartementComponent,
    AddDoctorComponent,
    AddPatientComponent,
    AddDocumentComponent,
    AddScheduleComponent,
    AddAppointmentComponent,
    AddPrescriptionComponent,
    AddAccountComponent,
    AddInvoiceComponent,
    AddPaymentComponent,
    EditAmbulanceComponent,
    AddServiceComponent,
    AddEmployeeComponent,
    AddAccountComponent,
    AddServiceComponent,
    AddScheduleComponent,
    AddPrescriptionComponent,
    AddPatientComponent,
    AddDocumentComponent,
    AddInvoiceComponent,
    EditDriverComponent,

    ViewDoctorComponent,
    ViewPatientComponent,
    ViewPrescriptionComponent,
    EditDepartementComponent,
    EditMedecinComponent,
    EditEmployeeComponent,
    EditAccountComponent,
    EditCategoryComponent,
    EditDocumentComponent,
    EditMedicamentComponent,

    EditInvoiceComponent,
    EditPatientComponent,
    EditRendezvousComponent,
    HospitalConfigComponent,
    EmailConfigComponent,
    SystemConfigComponent,
    ShortcutMenuComponent,
    DiagnosisComponent,
    InventoryComponent,
    ScheduleComponent,
    TestLabComponent,
    AddDiagnosisComponent,
    AddInventoryComponent,
    AddAmbulanceComponent,
    AddDriverComponent,
    AddMedecineTypeComponent,
    AddMedecineCategoryComponent,
    AddBedComponent,
    AddBedTypeComponent,
    AddVaccinationComponent,
    AddVaccinatedPeopleComponent,
    AddRadiologyComponent,
    AddRadiologyTypeComponent,
    AddRadiologyCategoryComponent,
    AddBloodComponent,
    AddBloodDonationComponent,
    AddBloodGroupComponent,
    AddBloodDonorComponent,
    BedComponent,
    ServiceComponent,
    BloodComponent,
    BlooddonorComponent,
    BlooddonationComponent,
    DiagnosisComponent,
    DriverComponent,
    InventoryComponent,
    MedecinComponent,
    RadiologyComponent,
    RadiologycategoryComponent,
    RadiologytypeComponent,
    BedtypeComponent,
    BloodComponent,
    AccountListComponent,
    AmbulanceListComponent,
    BedListComponent,
    BedtypeListComponent,
    BloodListComponent,
    BloodDonationListComponent,
    BlooddonorDonationListComponent,
    CategoryListComponent,
    DepartementListComponent,
    DiagnosisListComponent,
    DoctorListComponent,
    DriverListComponent,
    EmployeeListComponent,
    ExpenseListComponent,
    MedicamentListComponent,
    MedicineListComponent,
    MedicineCategoryListComponent,
    MedicineTypeListComponent,
    PatientListComponent,
    RadiologyListComponent,
    RadiologyCategoryListComponent,
    RadiologyTypeListComponent,
    ServiceListComponent,
    TestListComponent,
    VaccinatedPeopleListComponent,
    VaccinationListComponent,
    EditAmbulanceComponent,
    AmbulanceComponent,
    MedicinetypeComponent,
    MedicinecategoryComponent,
    VaccinationComponent,
    AddVaccinatedPeopleComponent,
    MedicamentComponent,
    LoadingComponent,
    AddMedicamentComponent,
    MedicineComponent,
    BloodgroupComponent,
    AddBloodGroupComponent,
    VaccinationComponent,
    VaccinatedpeopleComponent,
    EditBedTypeComponent,
    EditBedComponent,
    EditServiceComponent,
    EditBloodDonorComponent,
    EditBloodGroupComponent,
    EditMedecinComponent,
    EditMedicineCategoryComponent,
    EditMedeineTypeComponent,
    EditMedicamentComponent,
    EditMedecinComponent,
    PatientHistoryComponent,
    PatientPaymentComponent,
    DoctorScheduleComponent,
    DoctorAppointementComponent,
    DoctorHolidayComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgxSimpleCalendarModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', //scroll to the top
    }),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
