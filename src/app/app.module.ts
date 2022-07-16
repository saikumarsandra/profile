import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { SingupComponent } from './singup/singup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CardComponent } from './card/card.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { TokenInterceptor } from './core/interceptor';
import { LoginformComponent } from './loginform/loginform.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { FooterComponent } from './footer/footer.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { DetailsUpdateComponent } from './details-update/details-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    SearchProductComponent,
    DisplayCartComponent,
    SingupComponent,
    HomepageComponent,
    CardComponent,
    TransactionComponent,
    LoginformComponent,
    LogoutComponent,
    FooterComponent,
    DetailsUpdateComponent,
    OrderdetailsComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
    
  ],
  
  providers: [AuthGuard,ProductService,{provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent,FormsModule]
})
export class AppModule { }
