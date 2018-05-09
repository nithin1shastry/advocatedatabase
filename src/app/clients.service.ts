import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { client } from './client';
import 'rxjs/add/operator/map';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Clients } from './Clients';
@Injectable()
export class ClientsService {
  private clientsUrl = 'api/clients';
  constructor(private http: Http) { }

  //retrieving clients
  getClients(): Observable<any> {
    return this.http.get('http://localhost:3000/api/clients')
      .map(res => res.json());
  }

  //add new client
  addClients(newClient) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/clients', newClient, { headers: headers })
      .map(res => res.json());
  }


  //delete client
  deleteClients(_id) {
    return this.http.delete('http://localhost:3000/api/clients/' + _id)
      .map(res => res.json());
  }

  //retrieve particular id
  getClientsByID(id): Observable<Clients> {
    return this.http.get('http://localhost:3000/api/clients/' + id).map((res: Response) => {
      const jsonResponse = res.json();
      return this.convertItemFromServer(jsonResponse);
    });
  }


  //update client
  update(newClient) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/clients/update', newClient, { headers: headers })
      .map(res => res.json());
  }

  convertItemFromServer(json: any): Clients {
    const entity: Clients = Object.assign(new Clients(), json);
    return entity;
  }

  private convert(client: Clients): Clients {
    const copy: Clients = Object.assign({},client);
    return copy;
  }
}

