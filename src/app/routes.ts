import {Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { DetailComponent } from './detail/detail.component';
import {EditProductComponent} from './edit-product/edit-product.component'
import { NewProductComponent } from './new-product/new-product.component';
import {LoginComponent} from './login/login.component'
import {PrivateComponent} from './private/private.component'

export const routes: Routes = [
    { path: 'private', component: PrivateComponent},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',  component: AppComponent },
    { 
      path:'products', 
      component: ProductPageComponent,
      children:[
        {
          path: 'new',
          component: NewProductComponent
        }
      ]
    },
    {
      path: 'new',
      component: NewProductComponent
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

