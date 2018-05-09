import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { jun_case } from './jun_case';
import 'rxjs/add/operator/map';
import { IfObservable } from 'rxjs/observable/IfObservable';
@Injectable()
export class JuniorcaseService {

  constructor(private http:Http) { }

  //retrieving senior cases
  getJunCases(): Observable<any>
  {
    return this.http.get('http://localhost:3000/api/jun_cases')
      .map(res => res.json());
  }

  //add new cases
  addJunCases(newClient)
  {
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/api/jun_cases',newClient,{headers:headers})
                .map(res => res.json());
  }

  //retrieve particular id
  getJunCasesByID(id)
  {
    return this.http.get('http://localhost:3000/api/jun_cases/'+id)
                    .map(res => res.json());
  }
  //delete client
  deleteJuniorCases(id) {
    return this.http.delete('http://localhost:3000/api/jun_cases/' + id)
      .map(res => res.json());
  }

  update(juncasdetail) {
    console.log("the client sent is", juncasdetail)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/jun_cases/update', juncasdetail, { headers: headers })
      .map(res => res.json());
  }

  convertItemFromServer(json: any): jun_case {
    const entity: jun_case = Object.assign(new jun_case(), json);
    return entity;
  }

  private convert(juncasdetail: jun_case): jun_case {
    const copy: jun_case = Object.assign({},juncasdetail);
    return copy;
  }
}
