import { Component, OnInit } from '@angular/core';
import { JuniorsService } from '../juniors.service';
import { junior } from '../junior';

@Component({
  selector: 'app-juniors',
  templateUrl: './juniors.component.html',
  styleUrls: ['./juniors.component.css'],
  providers: [JuniorsService]
})
export class JuniorsComponent implements OnInit {

  juniors: any;
  junior: junior;

  constructor(private juniorsService: JuniorsService) { }
  
  deleteJuniors(j_id: number) {
    console.log(j_id.toString);
    this.juniors= this.juniors.filter(c => c.id !== j_id);
    var juniors = this.juniors;
    this.juniorsService.deleteJuniors(j_id)
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
    this.juniorsService.getJuniors()
        .subscribe((juniors: any) => this.juniors = juniors);
  }

}
