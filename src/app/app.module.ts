import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { RouterModule } from '@angular/router';
import { MatDialogModule } from "@angular/material/dialog";
import { FactureComponent } from './pages/facture/facture.component';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { FormsModule, NgModel } from '@angular/forms';









@NgModule({
  imports: [
    BrowserAnimationsModule,

    HttpClientModule,
    ComponentsModule,
    FormsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    AuthLayoutModule



  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    FactureComponent,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
