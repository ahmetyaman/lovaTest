import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/globalserv/alertify.service';
import { ChemistandcoronaService } from 'src/app/services/localserv/chemistandcorona.service';
import { Corona, CoronaModel } from 'src/app/services/models/corona-model';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css'],
  providers: [ChemistandcoronaService],
})
export class CoronaComponent implements OnInit {
  constructor(
    private chemistandcoronaService: ChemistandcoronaService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }
  filterText="";
  dataModel: CoronaModel = new CoronaModel();
  coronaList: Corona[];
  loadData() {
    this.chemistandcoronaService.getCoronas().subscribe((data) => {
      this.dataModel = data;
      if (this.dataModel.success == true) {
        this.alertifyService.success('Get corona data Succesfully');
        this.coronaList = this.dataModel.result;
      }
    });
  }
}
