import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../admin';
import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';

@Injectable({providedIn: "root"})
export class AdminService extends HateoasResourceOperation<Admin>{
    constructor() {
        super(Admin);
    }

    public findByUsernameContaining(query: string): Observable<ResourceCollection<Admin>> {
        return this.searchCollection('findByUsernameContaining', { params: { text: query } });
    }
}
