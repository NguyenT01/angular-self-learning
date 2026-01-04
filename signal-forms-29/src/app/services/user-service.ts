import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import TResponse from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  authenticate(credentials: { login: string; password: string }) {
    return new Promise<TResponse<string>>((resolve, reject) => {
      setTimeout(() => {
        if (credentials.login.includes('admin')) {
          reject(this.errorResponse);
        } else {
          resolve(this.suceessResponse);
        }
      }, 2000);
    });
  }

  authenticateObservable(credentials: { login: string; password: string }) {
    return new Observable<TResponse<string>>((observer) => {
      setTimeout(() => {
        if (credentials.login.includes('admin')) {
          observer.error(this.errorResponse);
        } else {
          observer.next(this.suceessResponse);
        }
        observer.complete();
      }, 2000);
    });
  }

  private readonly suceessResponse: TResponse<string> = {
    data: 'admin success',
    success: true,
    errorCode: 0,
    errorMessage: '',
  };

  private readonly errorResponse: TResponse<string> = {
    data: '',
    success: false,
    errorCode: 1,
    errorMessage: 'Username not found',
  };
}
