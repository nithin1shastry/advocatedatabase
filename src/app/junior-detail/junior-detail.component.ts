import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { JuniorsService } from '../juniors.service';
import { junior } from '../junior';

@Component({
  selector: 'app-junior-detail',
  templateUrl: './junior-detail.component.html',
  styleUrls: ['./junior-detail.component.scss'],
  providers: [JuniorsService]
})
export class JuniorDetailComponent implements OnInit {

  juniordetail: junior;
  jdetail: junior;
  constructor(
    private route: ActivatedRoute,
    private juniorsservice: JuniorsService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log("the id is",id);
    this.juniordetail = new junior();
    this.juniorsservice.getJuniorsByID(id)
      .subscribe( (jsono) => {
        this.juniordetail = jsono;
        console.log("before",this.juniordetail)
      });
    console.log("after",this.juniordetail);
  }
  save(){
    this.jdetail = this.juniordetail[0];
    const newClient = {
      _id: this.jdetail.JUNIOR_ID,
      client_name: this.jdetail.JUNIOR_NAME,
      phone_no: this.jdetail.PHONE_NUMBER,
      email_address: this.jdetail.EMAIL_ADDRESS,
      sal:this.jdetail.SALARY
    }
    console.log(newClient);
    this.juniorsservice.update(newClient)
      .subscribe(response => console.log(response));

    this.location.back();
  }
}
