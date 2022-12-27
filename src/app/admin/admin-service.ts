import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Injectable()
export class AdminService extends HateoasResourceOperation<Admin>{
    constructor() {
        super(Admin);
    }

    public findByUsernameContaining(text: string): Observable<ResourceCollection<Admin>> {
        const options: any = { params: [{ key: 'text', value: text }] };
        return this.searchCollection('findByUsernameContaining', options);
    }
}
