import {Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { DetailComponent } from './detail/detail.component';
import {EditProductComponent} from './edit-product/edit-product.component'

export const routes: Routes = [
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
      component: DetailComponent,
      children:[
          {
              path:'edit',
              component:EditProductComponent
          }
      ]
    }
  ]

