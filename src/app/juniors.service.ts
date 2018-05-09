import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { junior } from './junior';
import 'rxjs/add/operator/map';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { jun_case } from './jun_case';
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

  //delete juniors
  deleteJuniors(id) {
    return this.http.delete('http://localhost:3000/api/juniors/' + id)
      .map(res => res.json());
  }


  update(jun) {
    console.log("the client sent is", jun)
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/juniors/update', jun, { headers: headers })
      .map(res => res.json());
  }

  convertItemFromServer(json: any): jun_case {
    const entity: jun_case = Object.assign(new jun_case(), json);
    return entity;
  }

  private convert(client: jun_case): jun_case {
    const copy: jun_case = Object.assign({},client);
    return copy;
  }
}
