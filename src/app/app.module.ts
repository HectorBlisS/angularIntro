import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Routes, RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CardProductComponent } from './card-product/card-product.component';
import { DetailComponent } from './detail/detail.component';

//services
import {ProductListService} from './product-list.service'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: AppComponent },
  { 
    path:'products', 
    component: ProductPageComponent 
  },
  {
    path: 'signup',
    component: SignupFormComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    ProductPageComponent,
    CardProductComponent,
    DetailComponent
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
