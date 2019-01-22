import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { VisitsComponent } from './visits/visits.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorAddComponent } from './doctor-add/doctor-add.component';
import { MedsComponent } from './meds/meds.component';
import { MedAddComponent } from './med-add/med-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'doctors',
    component: DoctorsComponent 
  },
  {
    path: 'visits',
    component: VisitsComponent 
  },
  {
    path: 'doctors/details',
    component: DoctorDetailsComponent 
  },
  {
    path: 'doctors/add',
    component: DoctorAddComponent
  },
  {
    path: 'meds',
    component: MedsComponent
  },
  {
    path: 'meds/add',
    component: MedAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }