import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { ShirtListComponent }  from './shirts/shirt-list.component';
import { ShirtFilterPipe } from './shirts/shirt-filter.pipe';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,     
    ShirtListComponent,
    ShirtFilterPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
