import { Component } from '@angular/core';

import { ShirtService } from './shirts/shirt.service';

@Component({
    selector: 'unwire-shirtstore',
    template: `
    <div>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    providers: [ ShirtService ]
})
export class AppComponent {
    pageTitle: string = `Acme Product Management`;
}
