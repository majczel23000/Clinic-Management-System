import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { VisitsComponent } from './visits/visits.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { MedsComponent } from './meds/meds.component';
import { MedDetailsComponent } from './med-details/med-details.component';
import { MedAddComponent } from './med-add/med-add.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [ProfileComponent, DoctorsComponent, VisitsComponent, DoctorDetailsComponent, DoctorAddComponent, MedsComponent, MedDetailsComponent, MedAddComponent]
})
export class MainModule { }
