import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, take, filter } from 'rxjs/operators';
import { AuthorisationFacade } from '../store/authorisation-store.facade';

@Component({
    selector: 'app-main-authorisation-validate',
    template: `<p>Redirecting...</p><app-main-spinner></app-main-spinner>`,
})
export class ValidateAuthorisationComponent implements OnInit, OnDestroy {
    private destroyed$ = new Subject();

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private authorisationFacade: AuthorisationFacade) {}

    public ngOnInit(): void {
        this.activatedRoute.queryParams
            .pipe(takeUntil(this.destroyed$))
            .subscribe(p => {
                this.authorisationFacade.validate(p.state, p.code);

                this.authorisationFacade.getIsLoading()
                    .pipe(
                        filter(val => !val),
                        take(1)
                    )
                    .subscribe(() => this.router.navigateByUrl('/main/post-viewer'));
            });

    }

    public ngOnDestroy(): void {
        this.destroyed$.next();
    }
}
