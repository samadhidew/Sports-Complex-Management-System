import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckavailabilityComponent } from './components/checkavailability/checkavailability.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MembershipComponent } from './components/membership/membership.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { EventsComponent } from './components/events/events.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MorenewsComponent } from './components/morenews/morenews.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopmoreComponent } from './components/shopmore/shopmore.component';
import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'checkavailability', component: CheckavailabilityComponent},
  { path: 'contactus', component: ContactusComponent},
  { path: 'events', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'morenews', component: MorenewsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'reservation', component: ReservationComponent},
  { path: 'shop', component: ShopComponent },
  { path: 'shopmore', component: ShopmoreComponent },
  { path: 'shopcart', component: ShopcartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
