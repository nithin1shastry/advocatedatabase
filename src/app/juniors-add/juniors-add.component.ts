import { Component, OnInit } from '@angular/core';
import { JuniorsService } from '../juniors.service';
import { junior } from '../junior';
import { Location } from '@angular/common';
@Component({
  selector: 'app-juniors-add',
  templateUrl: './juniors-add.component.html',
  styleUrls: ['./juniors-add.component.css'],
  providers: [JuniorsService]
})
export class JuniorsAddComponent implements OnInit {

  juniors: any;
  junior: junior;
  j_id:string;
  junior_name: string;
  phone_no: string;
  salary: string;
  email_address:string;

  constructor
  ( private juniorsaddservice: JuniorsService,
    private location: Location) { }
   
    addNewJuniors() {
      const newJunior = {
        j_id: this.j_id,
        junior_name: this.junior_name,
        phone_no: this.phone_no,
        salary: this.salary,
        email_address: this.email_address
      }
      console.log(newJunior);
      this.juniorsaddservice.addJuniors(newJunior)
      .subscribe( junior => {
        this.juniors.push(junior);
        this.juniorsaddservice.getJuniors()
          .subscribe((juniors: any) => this.juniors = juniors);
      })

    this.location.back();

    }
      ngOnInit(){
        this.juniorsaddservice.getJuniors()
        .subscribe((juniors: any) => this.juniors= juniors);
      }
}
