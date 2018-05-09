import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClientsService } from '/home/nithin/Project/angular/material-dashboard-angular2-v1.4.2/src/app/clients.service';
import { client } from '/home/nithin/Project/angular/material-dashboard-angular2-v1.4.2/src/app/client';
@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css'],
  providers: [ClientsService]
})
export class ClientsAddComponent implements OnInit {

  clientsadd: any;
  client_add: client;
  _id: number;
  client_name: string;
  phone_no: string;
  email_address: string;
  submitted = false;
  onSubmit() { this.submitted = true; }
  constructor(
    private clientsaddservice: ClientsService,
    private location: Location
  ) { }

  addClients() {
    const newClient = {
      _id: this._id,
      client_name: this.client_name,
      phone_no: this.phone_no,
      email_address: this.email_address
    }
    console.log(newClient);

    this.clientsaddservice.addClients(newClient)
      .subscribe(client_add => {
        this.clientsadd.push(client_add);
        this.clientsaddservice.getClients()
          .subscribe((clientsadd: any) => this.clientsadd = clientsadd);
      })

    this.location.back();
  }
  ngOnInit() {
    this.clientsaddservice.getClients()
      .subscribe((clientsadd: any) => this.clientsadd = clientsadd);
  }
}
