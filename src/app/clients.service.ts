import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { client } from './client';
import 'rxjs/add/operator/map';
import { IfObservable } from 'rxjs/observable/IfObservable';
@Injectable()
export class ClientsService {

  constructor(private http:Http) { }

  //retrieving clients
  getClients(): Observable<any>
  {
    return this.http.get('http://localhost:3000/api/clients')
      .map(res => res.json());
  }

  //add new client
  addClients(newClient)
  {
     var headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post('http://localhost:3000/api/clients',newClient,{headers:headers})
                .map(res => res.json());
  }

  //retrieve particular id
  getClientsByID(id)
  {
    return this.http.get('http://localhost:3000/api/clients/'+id)
                    .map(res => res.json());
  }
}
