import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';


import { ShirtListComponent }  from './shirts/shirt-list.component';
import { ShirtDetailGuard } from './shirts/shirt-guard.service';
import { ShirtDetailComponent } from './shirts/shirt-detail.component';
import { ShirtFilterPipe } from './shirts/shirt-filter.pipe';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'shirts', component: ShirtListComponent },
      { path: 'shirt/:id',
        canActivate: [ ShirtDetailGuard ],
        component: ShirtDetailComponent },
      { path: '', redirectTo: 'shirts', pathMatch: 'full' },
      { path: '**', redirectTo: 'shirts', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    
    ShirtListComponent,
    ShirtDetailComponent,
    ShirtFilterPipe
  ],
  providers: [ ShirtDetailGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
