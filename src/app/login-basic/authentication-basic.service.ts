import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthenticationBasicService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<User> {
    const authorization = this.generateAuthorization(username, password);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: authorization
      })
    };
    return this.http.get(`${environment.API}/identity`, httpOptions).pipe(
      map(data => {
        const user: User = new User(data);
        user.authorization = authorization;
        this.storeCurrentUser(user);
        return user;
      })
    );
  }

  generateAuthorization(username: string, password: string): string {
    return `Basic ${btoa(`${username}:${password}`)}`;
  }

  storeCurrentUser(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): User {
    return new User(JSON.parse(localStorage.getItem('currentUser')));
  }

  isRole(role: string): boolean {
    const user: User = this.getCurrentUser();
    return user && user.authorities[0] && user.authorities[0].authority === 'ROLE_' + role.toUpperCase();
  }
}
