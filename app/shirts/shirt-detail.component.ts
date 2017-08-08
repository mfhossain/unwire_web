import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IShirt } from './shirt';
import { ShirtService } from './shirt.service';

@Component({
    templateUrl: 'app/shirts/shirt-detail.component.html'
})
export class ShirtDetailComponent implements OnInit {
    pageTitle: string = 'Shirt Detail';
    shirts: IShirt[];
    errorMessage: string;
    
 constructor(private _route: ActivatedRoute,
                private _router: Router, private _shirtService: ShirtService) {
    }


    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this._shirtService.getShirt(id)
               .subscribe(shirts => this.shirts = shirts,
                  error => this.errorMessage = <any>error);
               
    }

    
    
       

    onBack(): void {
        this._router.navigate(['/shirts']);
    }

   
 
}

