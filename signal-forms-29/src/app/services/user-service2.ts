import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService2 {
    public async isEmailRegistered(email: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                console.log('called api')
                if(email.includes('2001')){
                    reject(new Error('Internal Server Error'));
                }
                else if(email.includes('2000')){
                    resolve(true);
                }
                else{
                    resolve(false);
                }
            }, 2000);
        });
    }
}