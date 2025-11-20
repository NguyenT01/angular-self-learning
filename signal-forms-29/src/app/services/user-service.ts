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
        if (credentials.login === 'admin') {
          resolve(this.suceessResponse);
        } else {
          reject(this.errorResponse);
        }
      }, 2000);
    });
  }

  authenticateObservable(credentials: { login: string; password: string }) {
    return new Observable<TResponse<string>>((observer) => {
      setTimeout(() => {
        if (credentials.login === 'admin') {
          observer.next(this.suceessResponse);
        } else {
          observer.error(this.errorResponse);
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
