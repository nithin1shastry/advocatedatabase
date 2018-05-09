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
  TableData: any=[];
  ShowEditTable: boolean=false;
  EditRowId: any = [];
  clients: client[];
  client = new client();
  //flag: boolean;
  constructor(private clientsService: ClientsService) {
  // this.TableData = [{CLIENT_ID: 'client._id',CLIENT_NAME: 'client.client_name',PHONE_NUMBER: 'client.phone_no',EMAIL_ADDRESS:'client.email_address'}];
   }
   Edit(val){
     this.EditRowId=val;
   }
  deleteClients(_id: number) {
    console.log(_id.toString);
    this.clients = this.clients.filter(c => c._id !== _id);
    var clients = this.clients;
    this.clientsService.deleteClients(_id)
      // .subscribe(data => {
      //   if (data.n == 1) {
      //     for (var i = 0; i < clients.length; i++) {
      //       if (clients[i]._id == _id) {
      //         clients.splice(i, 1);
      //       }
      //     }
      //   }
      // })
      .subscribe()

  }
  ngOnInit() {
    this.clientsService.getClients()
      .subscribe(clients => this.clients = clients);

    //sthis.flag = false;
  }

  toggle(myClient: client) {
    myClient.flag = !myClient.flag
  }
}
