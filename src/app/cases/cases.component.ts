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
  providers: [CasService,JuniorcaseService]
})
export class CasesComponent implements OnInit {
  cases: cas[];
  case: cas;
  case_id:string;
  case_title: string;
  case_status: string;
  charge: string;

  jun_cases:jun_case[];
  jun_case:jun_case;
  jcase_id: string;
  jcase_title: string;
  jcase_status: string;
  jcharge: string;
  jclient_id: string;
  constructor(private caseService: CasService,
              private juncaseService: JuniorcaseService) { }
  
  ngOnInit() { 
    this.caseService.getCases()
        .subscribe((cases: any) => this.cases = cases);
    this.juncaseService.getJunCases()
        .subscribe((jun_cases: any) => this.jun_cases = jun_cases);
  }
 

}
