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

  ngOnInit() {
    this.juniorsService.getJuniors()
        .subscribe((juniors: any) => this.juniors = juniors);
  }

}
