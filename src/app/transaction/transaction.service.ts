import { HateoasResourceOperation, ResourceCollection } from '@lagoshny/ngx-hateoas-client';
import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends HateoasResourceOperation<Transaction> {

  constructor() {
    super(Transaction);
  }

  public findByBuyer(buyerUsername: string): Observable<ResourceCollection<Transaction>> {
    return this.searchCollection('findByBuyer_Username', { params: { username: buyerUsername } });
  }

  public findBySeller(sellerUsername: string): Observable<ResourceCollection<Transaction>> {
    return this.searchCollection('findBySeller_Username', { params: { username: sellerUsername } });
  }

  public findByBuyerOrSeller(buyerUsername: string, sellerUsername: string): Observable<ResourceCollection<Transaction>> {
    return this.searchCollection('findByBuyer_UsernameOrSeller_Username', { params: { buyerUsername: buyerUsername, sellerUsername: sellerUsername } });
  }
}
