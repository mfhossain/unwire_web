import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IShirt } from './shirt';

@Injectable()
export class ShirtService{
  private _shirtUrl = 'https://mock-shirt-backend.getsandbox.com/shirts';

  constructor(private _http: Http) { }



    getShirtList(): Observable<IShirt[]> {
      return this._http.get(this._shirtUrl)
                 .map((response: Response) => <IShirt[]>response.json())
                 .do(data => console.log('Log:' + JSON.stringify(data)))
                 .catch(this.handleError);
    }


    getShirt(id: number): Observable<IShirt[]> {
     return this._http.get(this._shirtUrl)
        .map(res => (<IShirt[]>res.json()).filter(shirt => shirt.id === id))
        .do(data => console.log(data)) 
        .catch(this.handleError);
    }

    


    private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server Error');
    }
}