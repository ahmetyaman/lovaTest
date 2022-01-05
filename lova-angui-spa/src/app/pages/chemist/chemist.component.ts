import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/globalserv/alertify.service';
import { ChemistandcoronaService } from 'src/app/services/localserv/chemistandcorona.service';
import { Chemist, ChemistModel } from 'src/app/services/models/chemist-model';

@Component({
  selector: 'app-chemist',
  templateUrl: './chemist.component.html',
  styleUrls: ['./chemist.component.css'],
  providers: [ChemistandcoronaService],
})
export class ChemistComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private chemistandcoronaService: ChemistandcoronaService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
   this.createChemistForm(); 
  }

  searchModel: any;

  chemistForm: FormGroup;

  dataModel: ChemistModel;
  chemistList: Chemist[];

  createChemistForm() {
    return (this.chemistForm = this.formBuilder.group({
      il: ['', Validators.required],
      ilce: ['', Validators.required],
    }));
  }

  search() {
    if (this.chemistForm.valid) {
      this.searchModel = Object.assign({}, this.chemistForm.value);

      this.loadData(this.searchModel.il, this.searchModel.ilce);

      this.alertifyService.success('Search Success');
    } else {
      this.alertifyService.error('Search error');
    }
  }

  loadData(il: string, ilce: string) {
    this.chemistandcoronaService.getChemists(ilce, il).subscribe((data) => {
      this.dataModel = data;
      if (this.dataModel.success == true) {
        this.alertifyService.success('Get chemist data Succesfully');
        this.chemistList = this.dataModel.result;
      }
    });
  }
}
