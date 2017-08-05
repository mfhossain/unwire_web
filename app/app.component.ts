import { Component } from '@angular/core';
import { ShirtService } from './shirts/shirt.service';

@Component({
    selector: 'unwire-shirtstore',
    template: '<div><h1>{{pageTitle}}</h1><unwire-shirtstore-shirtlist></unwire-shirtstore-shirtlist></div>',
    providers: [ ShirtService ]
})
export class AppComponent{
    pageTitle: string = 'Welcome to Unwire Shart Store';
}