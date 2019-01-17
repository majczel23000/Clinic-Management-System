import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { VisitsComponent } from './visits/visits.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProfileComponent, DoctorsComponent, VisitsComponent, DoctorDetailsComponent]
})
export class MainModule { }
