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
import {TransactionListComponent} from './transaction/transaction-list/transaction-list.component';
import {TransactionDetailComponent} from './transaction/transaction-detail/transaction-detail.component';
import {TransactionEditComponent} from './transaction/transaction-edit/transaction-edit.component';
import {TransactionSearchComponent} from './transaction/transaction-search/transaction-search.component';
import {MessageService} from "./message/message.service";
import {MessageListComponent} from "./message/message-list/message-list.component";
import {MessageRegisterComponent} from "./message/message-register/message-register.component";
import {MessageDetailComponent} from "./message/message-detail/message-detail.component";
import {MessageSearchComponent} from "./message/message-search/message-search.component";

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
    UserSearchComponent,
    TransactionListComponent,
    TransactionDetailComponent,
    TransactionEditComponent,
    TransactionSearchComponent,
    ServiceofferCreateComponent,
    MessageSearchComponent,
    MessageDetailComponent,
    MessageRegisterComponent,
    MessageListComponent
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
