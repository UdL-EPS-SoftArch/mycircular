import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoggedInGuard} from './login-basic/loggedin.guard';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './error-handler/error-alert/not-found.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserDeleteComponent} from './user/user-delete/user-delete.component';

import {RequestsListComponent} from './requests/requests-list/requests-list.component';
import {RequestsDetailComponent} from "./requests/requests-detail/requests-detail.component";
import {RequestsDeleteComponent} from "./requests/requests-delete/requests-delete.component";

import {ProductRequestsListComponent} from "./requests/product-requests-list/product-requests-list.component";
import {ProductRequestsDetailComponent} from "./requests/product-requests-detail/product-requests-detail.component";
import {ProductRequestsDeleteComponent} from "./requests/product-requests-delete/product-requests-delete.component";

import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewUpdateComponent } from './review/review-update/review-update.component';
import { ReviewDeleteComponent } from './review/review-delete/review-delete.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';
import { ReviewCreateComponent } from './review/review-create/review-create.component';
import {OfferListComponent} from "./offer/offer-list/offer-list.component";
import {ProductOfferListComponent} from "./offer/productoffer-list/product-offer-list.component";
import {ServiceOfferListComponent} from "./offer/serviceoffer-list/service-offer-list.component";
import {ProductofferCreateComponent} from "./offer/productoffer-create/productoffer-create.component";
import {ServiceofferCreateComponent} from "./offer/serviceoffer-create/serviceoffer-create.component";
import {ProductofferDeleteComponent} from "./offer/productoffer-delete/productoffer-delete.component";
import {ServiceofferDeleteComponent} from "./offer/serviceoffer-delete/serviceoffer-delete.component";
import {ProductofferEditComponent} from "./offer/productoffer-edit/productoffer-edit.component";
import {ServiceofferEditComponent} from "./offer/serviceoffer-edit/serviceoffer-edit.component";
import {ProductofferDetailComponent} from "./offer/productoffer-detail/productoffer-detail.component";
import {ServiceofferDetailComponent} from "./offer/serviceoffer-detail/serviceoffer-detail.component";
import {ServiceRequestsListComponent} from "./requests/service-requests-list/service-requests-list.component";
import {ServiceRequestsDetailComponent} from "./requests/service-requests-detail/service-requests-detail.component";
import {ServiceRequestsDeleteComponent} from "./requests/service-requests-delete/service-requests-delete.component";
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction/transaction-detail/transaction-detail.component';
import { TransactionEditComponent } from './transaction/transaction-edit/transaction-edit.component';
import {MessageListComponent} from "./message/message-list/message-list.component";
import {MessageDetailComponent} from "./message/message-detail/message-detail.component";
import {MessageRegisterComponent} from "./message/message-register/message-register.component";
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';

const routes: Routes = [
  {path: 'users/create', component: UserRegisterComponent},
  {path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  {path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  {path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},

  {path: 'requests', component: RequestsListComponent, canActivate: [LoggedInGuard]},
  {path: 'requests/:id', component: RequestsDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'requests/:id/delete', component: RequestsDeleteComponent, canActivate: [LoggedInGuard]},

  {path: 'productRequests', component: ProductRequestsListComponent, canActivate: [LoggedInGuard]},
  {path: 'productRequests/:id', component: ProductRequestsDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'productRequests/:id/delete', component: ProductRequestsDeleteComponent, canActivate: [LoggedInGuard]},

  {path: 'serviceRequests', component: ServiceRequestsListComponent, canActivate: [LoggedInGuard]},
  {path: 'serviceRequests/:id', component: ServiceRequestsDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'serviceRequests/:id/delete', component: ServiceRequestsDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'transactions/:id/edit', component: TransactionEditComponent, canActivate: [LoggedInGuard]},
  { path: 'transactions/:id' , component: TransactionDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'transactions', component: TransactionListComponent, canActivate: [LoggedInGuard] },
  { path: 'messages/create', component: MessageRegisterComponent, canActivate: [LoggedInGuard]},
  { path: 'messages/:id', component: MessageDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'messages', component: MessageListComponent, canActivate: [LoggedInGuard]},
  
  { path: 'admins/:id', component: AdminDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'admins', component: AdminListComponent, canActivate: [LoggedInGuard]},



  // reservada para admins { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  { path: 'reviews/create', component: ReviewCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'reviews/:id/delete', component: ReviewDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'reviews/:id/update', component: ReviewUpdateComponent, canActivate: [LoggedInGuard] },
  { path: 'reviews/:id', component: ReviewDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'reviews', component: ReviewListComponent, canActivate: [LoggedInGuard] },
  { path: 'offers', component: OfferListComponent},
  { path: 'productOffers', component: ProductOfferListComponent},
  { path: 'productOffers/create', component: ProductofferCreateComponent},
  { path: 'productOffers/:id/delete', component: ProductofferDeleteComponent },
  { path: 'productOffers/:id/edit', component: ProductofferEditComponent },
  { path: 'productOffers/:id', component: ProductofferDetailComponent },
  { path: 'serviceOffers', component: ServiceOfferListComponent},
  { path: 'serviceOffers/create', component: ServiceofferCreateComponent},
  { path: 'serviceOffers/:id/delete', component: ServiceofferDeleteComponent },
  { path: 'serviceOffers/:id/edit', component: ServiceofferEditComponent },
  { path: 'serviceOffers/:id', component: ServiceofferDetailComponent },
  { path: 'about', component: AboutComponent},
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
