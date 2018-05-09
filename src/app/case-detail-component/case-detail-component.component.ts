import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CasService } from '../case.service';
import { cas } from '../cas';
@Component({
  selector: 'app-case-detail-component',
  templateUrl: './case-detail-component.component.html',
  styleUrls: ['./case-detail-component.component.scss'],
  providers:[CasService]
})
export class CaseDetailComponentComponent implements OnInit {

  seniorCases: cas;
  myClient: cas;
  constructor(
    private route: ActivatedRoute,
    private caseservice: CasService,
    private location: Location
  ){}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("the id is",id);
    this.seniorCases = new cas();
    this.caseservice.getCasesByID(id)
      .subscribe( (jsono) => {
        this.seniorCases = jsono;
        console.log("before",this.seniorCases)
      });
    //console.log("after",this.seniorCases);
  }
  save(){
    this.myClient = this.seniorCases[0];
    console.log(this.myClient);
    const newClient = {
      case_id: this.myClient.CASE_ID,
      case_title: this.myClient.CASE_TITLE,
      case_status: this.myClient.CASE_STATUS,
      charges: this.myClient.CHARGES,
      client_id: this.myClient.CLIENT_ID
    }
    console.log(newClient);
    this.caseservice.update(newClient)
      .subscribe(response => console.log(response));

    this.location.back();
  }
}
