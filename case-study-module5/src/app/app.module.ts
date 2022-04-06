import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './body/customer-management/customer.component';
import { CustomerCreateComponent } from './body/customer-management/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './body/customer-management/customer-update/customer-update.component';
import { CustomerDetailComponent } from './body/customer-management/customer-detail/customer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BodyComponent,
    HeaderComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
