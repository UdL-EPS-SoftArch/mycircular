import {Routes} from '@angular/router';

import {LoginFormComponent} from './login-form.component';
import {UserRegisterComponent} from '../user/user-register/user-register.component';


export const routes: Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: UserRegisterComponent},

];
