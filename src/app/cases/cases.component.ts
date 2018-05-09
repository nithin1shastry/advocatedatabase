import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { CasService } from '../case.service';
import { cas } from '../cas';
import { JuniorcaseService } from '../juniorcase.service';
import { jun_case } from '../jun_case';
//import { cas } from '../cas';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
  providers: [CasService, JuniorcaseService]
})
export class CasesComponent implements OnInit {
  cases: cas[];
  case: cas;
  case_id: number;
  case_title: string;
  case_status: string;
  client_id: number;
  charges: number;

  jun_cases: jun_case[];
  jun_case: jun_case;
  j_id: number;
  j_name: string;
  jcase_id: number;
  jcase_title: string;
  jcase_status: string;
  jcharge: number;
  jclient_id: number;
  constructor(private caseService: CasService,
    private juncaseService: JuniorcaseService) { }

  deleteJuniorCases(_id: number) {
    console.log(_id.toString);
    this.jun_cases = this.jun_cases.filter(c => c.JUNIOR_CASE_ID !== _id);
    var jun_cases = this.jun_cases;
    this.juncaseService.deleteJuniorCases(_id)
      // .subscribe(data => {
      //   if (data.n == 1) {
      //     for (var i = 0; i < clients.length; i++) {
      //       if (clients[i]._id == _id) {
      //         clients.splice(i, 1);
      //       }
      //     }
      //   }
      // })
      .subscribe(jun_case => {
        this.jun_cases.pop();
        this.juncaseService.deleteJuniorCases(_id)
          .subscribe((jun_cases: any) => this.jun_cases = jun_cases);
      })

  }

  deleteSeniorCases(_id: number) {
    console.log(_id.toString);
    this.cases = this.cases.filter(c => c.CASE_ID !== _id);
    var cases = this.cases;
    this.caseService.deleteSeniorCases(_id)
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
    this.caseService.getCases()
      .subscribe((cases: any) => this.cases = cases);
    this.juncaseService.getJunCases()
      .subscribe((jun_cases: any) => this.jun_cases = jun_cases);
  }


}
