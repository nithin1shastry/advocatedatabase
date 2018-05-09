import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ClientsService } from '../clients.service';
import { Clients } from '../Clients';
@Component({
  selector: 'app-client-detail-component',
  templateUrl: './client-detail-component.component.html',
  styleUrls: ['./client-detail-component.component.scss'],
  providers: [ClientsService]
})
export class ClientDetailComponentComponent implements OnInit {
  clientss: Clients;
  myClient: Clients;
  constructor(
    private route: ActivatedRoute,
    private clientsservice: ClientsService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("the id is",id);
    this.clientss = new Clients();
    this.clientsservice.getClientsByID(id)
      .subscribe( (jsono) => {
        this.clientss = jsono;
        // console.log("before",this.clientss)
      });
    // console.log("after",this.clientss);
  }

  save(){
    this.myClient = this.clientss[0];
    const newClient = {
      _id: this.myClient.CLIENT_ID,
      client_name: this.myClient.CLIENT_NAME,
      phone_no: this.myClient.PHONE_NUMBER,
      email_address: this.myClient.EMAIL_ADDRESS
    }
    console.log(newClient);
    this.clientsservice.update(newClient)
      .subscribe(response => console.log(response));

    this.location.back();
  }
}
