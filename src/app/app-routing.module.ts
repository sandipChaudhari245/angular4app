import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourcesComponent } from './cources/cources.component';
import { DoctordirComponent } from './doctordir/doctordir.component';
import { UserappComponent } from './userapp/userapp.component';

const routes: Routes = [
  { path: '', component: CourcesComponent },
  { path: 'doctor', component: DoctordirComponent },
  { path: 'user/:username', component: UserappComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
