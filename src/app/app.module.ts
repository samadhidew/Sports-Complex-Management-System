import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MembershipComponent } from './components/membership/membership.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopmoreComponent } from './components/shopmore/shopmore.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EventsComponent } from './components/events/events.component';
import { MorenewsComponent } from './components/morenews/morenews.component';
import { CheckavailabilityComponent } from './components/checkavailability/checkavailability.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { PaymentsComponent } from './components/payments/payments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MembershipComponent,
    AboutusComponent,
    ContactusComponent,
    ShopComponent,
    ShopmoreComponent,
    ShopcartComponent,
    GalleryComponent,
    EventsComponent,
    MorenewsComponent,
    CheckavailabilityComponent,
    ReservationComponent,
    PaymentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
