import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthorisationService } from '../../authorisation/service/authorisation.service';
import { map } from 'rxjs/operators';

@Injectable()
export class PostViewerLandingPageGuard implements CanActivate {

    constructor(
        private authorisationService: AuthorisationService,
        private router: Router
    ) {}

    canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): Observable<boolean | UrlTree> {
        return this.authorisationService.isAuthorised$.pipe(
            map(isAuthorised => isAuthorised ?
                true :
                this.router.parseUrl('/main/authorisation/start'))
        );
    }
}
