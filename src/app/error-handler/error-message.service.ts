import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ErrorMessageService {

  private errorMessageSource = new Subject<string>();

  errorMessage$ = this.errorMessageSource.asObservable();

  constructor() {
  }

  showErrorMessage(errorMessage: string): void {
    this.errorMessageSource.next(errorMessage);
  }
}
