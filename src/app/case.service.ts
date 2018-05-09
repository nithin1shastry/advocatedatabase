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
     return this.http.post('http://localhost:3000/api/mycases',newClient,{headers:headers})
                .map(res => res.json());
  }

  //retrieve particular id
  getCasesByID(id)
  {
    return this.http.get('http://localhost:3000/api/mycases/'+id)
                    .map(res => res.json());
  }

   //delete senior casses
   deleteSeniorCases(case_id) {
    return this.http.delete('http://localhost:3000/api/mycases/' + case_id)
      .map(res => res.json());
  }

  update(sen_case) {
    console.log("the case sent is", sen_case)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/mycases/update', sen_case, { headers: headers })
      .map(res => res.json());
  }

  convertItemFromServer(json: any): cas {
    const entity: cas = Object.assign(new cas(), json);
    return entity;
  }

  private convert(sen_case: cas): cas {
    const copy: cas = Object.assign({},sen_case);
    return copy;
  }
}
