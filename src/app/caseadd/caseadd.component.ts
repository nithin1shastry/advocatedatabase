import { Component, OnInit } from '@angular/core';
import { cas } from '../cas';
import { CasService } from '../case.service';
@Component({
  selector: 'app-caseadd',
  templateUrl: './caseadd.component.html',
  styleUrls: ['./caseadd.component.css'],
  providers: [CasService]
})
export class CaseaddComponent implements OnInit {

  cases: cas[];
  case: cas;
  case_id:string;
  case_title: string;
  case_status: string;
  charge: string;

  constructor(private caseService: CasService) { 
    
  }

  ngOnInit() {
    this.caseService.getCases()
        .subscribe((cases: any) => this.cases = cases);
  }

}
