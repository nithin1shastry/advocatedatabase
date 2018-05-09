import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { JuniorcaseService } from '../juniorcase.service';
import { jun_case } from '../jun_case';

@Component({
  selector: 'app-junior-case-detail',
  templateUrl: './junior-case-detail.component.html',
  styleUrls: ['./junior-case-detail.component.scss'],
  providers: [JuniorcaseService]
})
export class JuniorCaseDetailComponent implements OnInit {

  juniorscasesdetail: jun_case;
  jun:jun_case;

  constructor(
    private route: ActivatedRoute,
    private juncaseservice: JuniorcaseService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("the id is",id);
    this. juniorscasesdetail = new jun_case();
    this.juncaseservice.getJunCasesByID(id)
      .subscribe( (jsono) => {
        this.juniorscasesdetail = jsono;
        console.log("before",this.juniorscasesdetail)
      });
    console.log("after",this.juniorscasesdetail);
  }

  save(){
    this.jun = this.juniorscasesdetail[0];
    console.log(this.jun);
    const newJunior = {
      junior_id: this.jun.JUNIOR_ID,
      j_name: this.jun.JUNIOR_NAME,
      j_case_id: this.jun.JUNIOR_CASE_ID,
      j_case_title: this.jun.JUNIOR_CASE_TITLE,
      j_case_status: this.jun.JUNIOR_CASE_STATUS,
      j_charge: this.jun.JUNIOR_CHARGE,
      c_id: this.jun.CLIENT_ID
    }
    console.log(newJunior);
    this.juncaseservice.update(newJunior)
      .subscribe(response => console.log(response));

    this.location.back();
  }

}
