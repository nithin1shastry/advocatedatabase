import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { cas } from './cas';
import 'rxjs/add/operator/map';
import { IfObservable } from 'rxjs/observable/IfObservable';
@Injectable()
export class CasService {

  constructor(private http:Http) { }

  //retrieving senior cases
  getCases(): Observable<any>
  {
    return this.http.get('http://localhost:3000/api/mycases')
      .map(res => res.json());
  }

  //add new cases
  addCases(newClient)
  {
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/api/cases',newClient,{headers:headers})
                .map(res => res.json());
  }

  //retrieve particular id
  getCasesByID(id)
  {
    return this.http.get('http://localhost:3000/api/casess/'+id)
                    .map(res => res.json());
  }
}
