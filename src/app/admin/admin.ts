import { User } from '../login-basic/user';
import { HateoasResource } from '@lagoshny/ngx-hateoas-client';

@HateoasResource('admins')
export class Admin extends User {}