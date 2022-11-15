import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {ErrorMessageService} from './error-message.service';
import {Observable} from 'rxjs/internal/Observable';
import {tap} from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private errorMessageService: ErrorMessageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap(
        () => {
        },
        (error: any) => {
          if (error instanceof HttpErrorResponse) {
            console.log('HTTP Error Interceptor: ' + this.extractErrorMessage(error));
            switch (error.status) {
              case 0:
                this.errorMessageService.showErrorMessage('There was an error connecting to Server');
                break;
              case 401:
                this.errorMessageService.showErrorMessage('Username or password incorrect');
                break;
              case 404:
                break;
              default:
                console.log(error);
                this.errorMessageService.showErrorMessage(this.extractErrorMessage(error));
            }
          }
        })
    );
  }

  private extractErrorMessage(error: HttpErrorResponse): string {
    if (error.error) {
      if (error.error.errors) {
        return error.error.errors.map(e => e.entity + ' ' + e.property + ': ' + e.message).join(', ');
      }
      let cause = error.error;
      while (cause.cause) {
        cause = cause.cause;
      }
      return cause.message;
    } else if (error.message) {
      return error.message;
    } else {
      return error.name;
    }
  }
}
