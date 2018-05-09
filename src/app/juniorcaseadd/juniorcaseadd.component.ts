import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { JuniorcaseService } from '../juniorcase.service';
import { jun_case } from '../jun_case';

@Component({
  selector: 'app-juniorcaseadd',
  templateUrl: './juniorcaseadd.component.html',
  styleUrls: ['./juniorcaseadd.component.css'],
  providers: [JuniorcaseService]
})
export class JuniorcaseaddComponent implements OnInit {


  jun_cases: jun_case[];
  j_id: number;
  j_name: string;
  jun_case: jun_case;
  jcase_id: number;
  jcase_title: string;
  jcase_status: string;
  jcharge: number;
  jclient_id: number;
  submitted = false;
  onSubmit() { this.submitted = true; }
  constructor(
    private juncaseService: JuniorcaseService,
    private location: Location
  ) { }

  addJunCases() {
    const newJuniorCase = {
      j_id: this.j_id,
      j_name: this.j_name,
      jcase_id: this.jcase_id,
      jcase_title: this.jcase_title,
      jcase_status: this.jcase_status,
      jcharge: this.jcharge,
      jclient_id: this.jclient_id
    }
    console.log(newJuniorCase);
    this.juncaseService.addJunCases(newJuniorCase)
      .subscribe(jun_case => {
        this.jun_cases.push(jun_case);
        this.juncaseService.getJunCases()
          .subscribe((jun_cases: any) => this.jun_cases = jun_cases);
      })

    this.location.back();
  }

  ngOnInit() {
    this.juncaseService.getJunCases()
      .subscribe((jun_cases: any) => this.jun_cases = jun_cases);
  }

}
