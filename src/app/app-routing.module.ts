import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewUpdateComponent } from './review/review-update/review-update.component';
import { ReviewDeleteComponent } from './review/review-delete/review-delete.component';
import { ReviewDetailComponent } from './review/review-detail/review-detail.component';
import { ReviewCreateComponent } from './review/review-create/review-create.component';

const routes: Routes = [
  { path: 'users/create', component: UserRegisterComponent },
  { path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard] },
  { path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'users', component: UserListComponent, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },

  { path: 'reviews/create', component: ReviewCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'reviews/:id/delete', component: ReviewDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'reviews/:id/update', component: ReviewUpdateComponent, canActivate: [LoggedInGuard] },
  { path: 'reviews/:id', component: ReviewDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'reviews', component: ReviewListComponent, canActivate: [LoggedInGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
