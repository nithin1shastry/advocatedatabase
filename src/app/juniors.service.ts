import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { junior } from './junior';
import 'rxjs/add/operator/map';
import { IfObservable } from 'rxjs/observable/IfObservable';
@Injectable()
export class JuniorsService {


  constructor(private http:Http) { }

  //retrieving juniors
  getJuniors(): Observable<any>
  {
    return this.http.get('http://localhost:3000/api/juniors')
      .map(res => res.json());
  }

  //add new junior
  addJuniors(newJunior)
  {
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/api/juniors',newJunior,{headers:headers})
                .map(res => res.json());
  }

  //retrieve particular id
  getJuniorsByID(id)
  {
    return this.http.get('http://localhost:3000/api/juniors/'+id)
                    .map(res => res.json());
  }
}
