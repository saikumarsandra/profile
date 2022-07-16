import { NgModule } from '@angular/core';
import { Routes, RouterModule, OutletContext } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { SingupComponent } from './singup/singup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CardComponent } from './card/card.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoginformComponent } from './loginform/loginform.component';
import { combineLatest } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';
import { DetailsUpdateComponent } from './details-update/details-update.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';



const routes: Routes = [
  {path:"", redirectTo : "login", pathMatch: "full"},
  {path:'product-details',component:ProductDetailsComponent  },
  {path:'search-details', component:SearchProductComponent,canActivate:[AuthGuard]},
  {path:'display-cart',component:DisplayCartComponent,canActivate:[AuthGuard]},
  {path:'signup',component:SingupComponent},
  {path:'homepage',component:HomepageComponent,canActivate:[AuthGuard]},
  {path:'update',component:DetailsUpdateComponent ,canActivate:[AuthGuard]},
  {path:'card/:id',component:CardComponent},
  {path:'order',component:OrderdetailsComponent},
  {path:'gototransaction',component:TransactionComponent},
  {path:'login',component:LoginformComponent},
  {path:'logout',component:LogoutComponent,canActivate:[AuthGuard]},
  {path:'footer',component:FooterComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
