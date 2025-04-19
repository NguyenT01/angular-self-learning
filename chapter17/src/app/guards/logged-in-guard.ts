import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { UserService } from "../services/user-service";
import { inject } from "@angular/core";

export const loggedInGuard: CanActivateFn = (
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
) : boolean | UrlTree =>{
    const userService = inject(UserService);
    const router = inject(Router);

    return userService.isLoggedIn() || router.parseUrl('/login');
}