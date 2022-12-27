import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxHateoasClientConfigurationService, NgxHateoasClientModule} from '@lagoshny/ngx-hateoas-client';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './error-handler/error-alert/not-found.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserDeleteComponent} from './user/user-delete/user-delete.component';
import {UserSearchComponent} from './user/user-search/user-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbCollapseModule, NgbDropdownModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginBasicModule} from './login-basic/login-basic.module';
import {ErrorHandlerModule} from './error-handler/error-handler.module';
import {AuthInterceptor} from './login-basic/auth-interceptor';
import {HttpErrorInterceptor} from './error-handler/http-error-interceptor';
import {AuthenticationBasicService} from './login-basic/authentication-basic.service';
import {LoggedInGuard} from './login-basic/loggedin.guard';
import {UserService} from './user/user.service';
//import { RequestsComponent } from './requests/requests.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';
import { RequestsSearchComponent } from './requests/requests-search/requests-search.component';
import { RequestsRegisterComponent } from './requests/requests-register/requests-register.component';
import { RequestsDetailComponent } from './requests/requests-detail/requests-detail.component';
import { RequestsDeleteComponent } from './requests/requests-delete/requests-delete.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewUpdateComponent } from './review/review-update/review-update.component';
import { ReviewDeleteComponent } from './review/review-delete/review-delete.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';
import { ReviewCreateComponent } from './review/review-create/review-create.component';
import { OfferListComponent } from './offer/offer-list/offer-list.component';
import { ProductofferEditComponent } from './offer/productoffer-edit/productoffer-edit.component';
import { ProductofferDeleteComponent } from './offer/productoffer-delete/productoffer-delete.component';
import { ProductofferDetailComponent } from './offer/productoffer-detail/productoffer-detail.component';
import { ProductofferCreateComponent } from './offer/productoffer-create/productoffer-create.component';
import { ProductOfferListComponent } from './offer/productoffer-list/product-offer-list.component';
import { ServiceOfferListComponent } from './offer/serviceoffer-list/service-offer-list.component';
import { ServiceofferDeleteComponent } from './offer/serviceoffer-delete/serviceoffer-delete.component';
import { ServiceofferEditComponent } from './offer/serviceoffer-edit/serviceoffer-edit.component';
import { ServiceofferDetailComponent } from './offer/serviceoffer-detail/serviceoffer-detail.component';
import { ServiceofferCreateComponent } from './offer/serviceoffer-create/serviceoffer-create.component';
import {OfferService} from "./offer/offer.service";
import {ProductOfferService} from "./offer/productoffer.service";
import {ServiceOfferService} from "./offer/serviceoffer.service";
import { ProductRequestsRegisterComponent } from './requests/product-requests-register/product-requests-register.component';
import { ProductRequestsListComponent } from './requests/product-requests-list/product-requests-list.component';
import { ProductRequestsDetailComponent } from './requests/product-requests-detail/product-requests-detail.component';
import { ProductRequestsDeleteComponent } from './requests/product-requests-delete/product-requests-delete.component';
import { ServiceRequestsCreateComponent } from './requests/service-requests-register/service-requests-create.component';
import { ServiceRequestsListComponent } from './requests/service-requests-list/service-requests-list.component';
import { ServiceRequestsDetailComponent } from './requests/service-requests-detail/service-requests-detail.component';
import { ServiceRequestsDeleteComponent } from './requests/service-requests-delete/service-requests-delete.component';
import {TransactionListComponent} from './transaction/transaction-list/transaction-list.component';
import {TransactionDetailComponent} from './transaction/transaction-detail/transaction-detail.component';
import {TransactionEditComponent} from './transaction/transaction-edit/transaction-edit.component';
import {TransactionSearchComponent} from './transaction/transaction-search/transaction-search.component';
import {MessageService} from "./message/message.service";
import {MessageListComponent} from "./message/message-list/message-list.component";
import {MessageRegisterComponent} from "./message/message-register/message-register.component";
import {MessageDetailComponent} from "./message/message-detail/message-detail.component";
import {MessageSearchComponent} from "./message/message-search/message-search.component";
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    NotFoundComponent,
    UserListComponent,
    UserDetailComponent,
    UserRegisterComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserSearchComponent,
//    RequestsComponent,
    RequestsListComponent,
RequestsSearchComponent,
RequestsRegisterComponent,
RequestsDetailComponent,
RequestsDeleteComponent,
    UserSearchComponent,
    ReviewListComponent,
    ReviewUpdateComponent,
    ReviewDeleteComponent,
    ReviewDetailComponent,
    ReviewCreateComponent,
    OfferListComponent,
    ProductofferEditComponent,
    ProductofferDeleteComponent,
    ProductofferDetailComponent,
    ProductofferCreateComponent,
    ProductOfferListComponent,
    ServiceOfferListComponent,
    ServiceofferDeleteComponent,
    ServiceofferEditComponent,
    ServiceofferDetailComponent,
    ServiceofferCreateComponent,
    ProductRequestsRegisterComponent,
    ProductRequestsListComponent,
    ProductRequestsDetailComponent,
    ProductRequestsDeleteComponent,
    ServiceRequestsCreateComponent,
    ServiceRequestsListComponent,
    ServiceRequestsDetailComponent,
    ServiceRequestsDeleteComponent,
    ServiceofferCreateComponent,
    UserSearchComponent,
    TransactionListComponent,
    TransactionDetailComponent,
    TransactionEditComponent,
    TransactionSearchComponent,
    ServiceofferCreateComponent,
    MessageSearchComponent,
    MessageDetailComponent,
    MessageRegisterComponent,
    MessageListComponent,
    AdminListComponent,
    AdminDetailComponent,
    AdminUpdateComponent,
    AdminDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxHateoasClientModule.forRoot(),
    LoginBasicModule,
    ErrorHandlerModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    AuthenticationBasicService, LoggedInGuard, UserService, OfferService, ProductOfferService, ServiceOfferService, MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(hateoasConfig: NgxHateoasClientConfigurationService) {
    hateoasConfig.configure({
      http: {
        rootUrl: environment.API
      }
    });
  }
}
