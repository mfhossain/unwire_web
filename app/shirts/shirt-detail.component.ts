import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IShirt } from './shirt';

@Component({
    templateUrl: 'app/shirts/shirt-detail.component.html'
})
export class ShirtDetailComponent implements OnInit {
    pageTitle: string = 'Shirt Detail';
    shirt: IShirt;

 constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/shirts']);
    }
}

