import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CardProductComponent } from './card-product/card-product.component';
import { DetailComponent } from './detail/detail.component';
//routes
import {routes} from './routes'
//services
import {ProductListService} from './product-list.service';
import { EditProductComponent } from './edit-product/edit-product.component'



@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    ProductPageComponent,
    CardProductComponent,
    DetailComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
