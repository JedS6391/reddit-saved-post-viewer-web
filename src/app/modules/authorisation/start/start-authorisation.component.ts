import { Component, OnInit } from '@angular/core';
import { AuthorisationFacade } from '../store/authorisation-store.facade';
import { Observable } from 'rxjs';
import { OAuthUrl } from '../api/models/oauth-url.interface';

@Component({
    selector: 'app-main-authorisation-start',
    templateUrl: './start-authorisation.component.html'
})
export class StartAuthorisationComponent implements OnInit {
    public oAuthUrl$: Observable<OAuthUrl>;

    constructor(private authorisationFacade: AuthorisationFacade) { }

    public ngOnInit(): void {
        this.authorisationFacade.fetchOAuthUrl();

        this.oAuthUrl$ = this.authorisationFacade.getOAuthUrl();
    }
}
