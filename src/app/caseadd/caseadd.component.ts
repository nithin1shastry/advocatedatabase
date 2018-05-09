import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { cas } from '../cas';
import { CasService } from '../case.service';
@Component({
  selector: 'app-caseadd',
  templateUrl: './caseadd.component.html',
  styleUrls: ['./caseadd.component.css'],
  providers: [CasService]
})
export class CaseaddComponent implements OnInit {
  ngOnInit() {
    this.caseService.getCases()
      .subscribe((cases: any) => this.cases = cases);
  }
  cases: cas[];
  casee: cas;
  case_id: number;
  case_title: string;
  case_status: string;
  client_id: number;
  charges: number;
  submitted = false;
  onSubmit() { this.submitted = true; }

  constructor(
    private caseService: CasService,
    private location: Location) {

  }

  addCases() {
    const newCase = {
      case_id: this.case_id,
      case_title: this.case_title,
      case_status: this.case_status,
      client_id: this.client_id,
      charges: this.charges
    }
    console.log(newCase);
    this.caseService.addCases(newCase)
      .subscribe(casee => {
        this.cases.push(casee);
        this.caseService.getCases()
          .subscribe((cases: any) => this.cases = cases);
      })
    this.location.back();
  }
}
