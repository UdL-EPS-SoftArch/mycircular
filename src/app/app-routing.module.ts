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

const routes: Routes = [
  {path: 'users/create', component: UserRegisterComponent},
  {path: 'users/:id/delete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  {path: 'users/:id/edit', component: UserEditComponent, canActivate: [LoggedInGuard]},
  {path: 'users/:id', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'users', component: UserListComponent, canActivate: [LoggedInGuard]},
  //{path: 'requests-list', component: RequestsListComponent, canActivate: [LoggedInGuard]},
  {path: 'requests', component: RequestsListComponent, canActivate: [LoggedInGuard]},
  //todo este create diria que no hace falta, ya que es un boton el que crea la request, no una pagina.
  //{path: 'requests/create', component: RequestsRegisterComponent, canActivate: [LoggedInGuard]},
  {path: 'requests/:id', component: RequestsDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'requests/:id/delete', component: RequestsDeleteComponent, canActivate: [LoggedInGuard]},

  {path: 'about', component: AboutComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
