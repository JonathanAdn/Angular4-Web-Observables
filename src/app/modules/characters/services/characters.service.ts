import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Character } from '../classes/character';

@Injectable()
export class CharactersService {

  private charactersUrl: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: Http) { }

  getCharacters(): Observable<Character[]> {
    return this.http
      .get(this.charactersUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getCharacter(id: number | string): Observable<Character> {
    return this.http
      .get(`${this.charactersUrl}/${id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  updateCharacter(body: Object): Observable<Character> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options    = new RequestOptions({ headers: headers }); // Create a request option

      return this.http
        .put(`${this.charactersUrl}/${body['id']}`, body, options) // ...using put request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }  

  addCharacter(body: Object): Observable<Character> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options    = new RequestOptions({ headers: headers }); // Create a request option

      return this.http
        .post(this.charactersUrl, body, options) // ...using post request
        .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
        .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  removeCharacter(id: number | string): Observable<Character> {
    return this.http
      .delete(`${this.charactersUrl}/${id}`) // ...using put request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if an
  }
}
