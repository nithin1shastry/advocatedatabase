import { Component, OnInit } from '@angular/core';
import { JuniorcaseService } from '../juniorcase.service';
import { jun_case } from '../jun_case';

@Component({
  selector: 'app-juniorcaseadd',
  templateUrl: './juniorcaseadd.component.html',
  styleUrls: ['./juniorcaseadd.component.css'],
  providers: [JuniorcaseService]
})
export class JuniorcaseaddComponent implements OnInit {

  jun_cases:jun_case[];
  jun_case:jun_case;
  jcase_id: string;
  jcase_title: string;
  jcase_status: string;
  jcharge: string;
  jclient_id: string;

  constructor( private juncaseService: JuniorcaseService) { }

  ngOnInit() {
    this.juncaseService.getJunCases()
    .subscribe((jun_cases: any) => this.jun_cases = jun_cases);
  }

}
