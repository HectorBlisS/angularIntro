import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CardProductComponent } from './card-product/card-product.component';
import { DetailComponent } from './detail/detail.component';
//routes
import {routes} from './routes'
//services
import {AuthService} from './services/auth.service'
import {ProductListService} from './product-list.service';
import { EditProductComponent } from './edit-product/edit-product.component'
import {PhoneService} from './services/phones.service';
import { NewProductComponent } from './new-product/new-product.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component'

//material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon'




@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    ProductPageComponent,
    CardProductComponent,
    DetailComponent,
    EditProductComponent,
    NewProductComponent,
    LoginComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    ProductListService, 
    PhoneService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
