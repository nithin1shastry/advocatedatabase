import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { client } from '../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ClientsService]
})
export class ClientsComponent implements OnInit {
  clients: any;
  client = new client();
  flag: boolean;
  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clientsService.getClients()
        .subscribe((clients: any) => this.clients = clients);

    this.flag = false;
  }

  toggle(myClient:client) {
    myClient.flag = !myClient.flag
  }
}
