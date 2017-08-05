import { Component } from '@angular/core';
import { IShirt } from './shirt';
import { ShirtService } from './shirt.service';

@Component({
    selector:'unwire-shirtstore-shirtlist',
    templateUrl:'app/shirts/shirt-list.component.html',
    styleUrls: ['app/shirts/shirt-list.component.css']
})

export class ShirtListComponent {
    pageTitle: string = "Shirt List";
    imageWidth:number=50;
    imageMargin:number=2;    
    listFilter: string = '';
    shirts: IShirt[]; 
    errorMessage: string;
    
    constructor(private _shirtService: ShirtService){        
    }

    ngOnInit(): void{
        this._shirtService.getShirtList()
               .subscribe(shirts => this.shirts = shirts,
                  error => this.errorMessage = <any>error);
    }   
}