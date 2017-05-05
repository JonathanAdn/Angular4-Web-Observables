import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../classes/user';

@Injectable()
export class UserService {

  private sheetsuApiUrl: string = 'https://sheetsu.com/apis/v1.0/f85c5184554b';  

  constructor(private http: Http) { }

  getUser(id: number | string): Observable<User> {
    return this.http
      .get(`${this.sheetsuApiUrl}/search?id=${id}`)
      .map((res: Response) => res.json()[0])
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getSheetsuUsers(): Observable<User[]> {
    return this.http
      .get(this.sheetsuApiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  updateUser(body: Object): Observable<User> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options    = new RequestOptions({ headers: headers }); // Create a request option

      return this.http
        .put(`${this.sheetsuApiUrl}/name/${body['name']}`, body, options) // ...using put request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  } 

  addUser(body: Object): Observable<User> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options    = new RequestOptions({ headers: headers }); // Create a request option

    // generate random id for testing
    let rand = Math.random()*100000;
    body['id'] = Math.ceil(rand);

      return this.http
        .post(this.sheetsuApiUrl, body, options) // ...using post request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  } 

  removeUser(body: Object): Observable<User> {
    return this.http
      .delete(`${this.sheetsuApiUrl}/name/${body['name']}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if an
  }

}
