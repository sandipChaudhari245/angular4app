import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourcesComponent } from './cources/cources.component';
import { DoctordirComponent } from './doctordir/doctordir.component';
import { UserappComponent } from './userapp/userapp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourcesService } from './cources.service';

@NgModule({
  declarations: [
    AppComponent,
    CourcesComponent,
    DoctordirComponent,
    UserappComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourcesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
