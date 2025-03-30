import { HttpContextToken, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ErrorHandler{
    handle(errorResponse: HttpErrorResponse) {
        console.log('Error', errorResponse.message);
    }
}

export const SHOULD_NOT_HANDLE_ERROR = new HttpContextToken<boolean>(() => false);