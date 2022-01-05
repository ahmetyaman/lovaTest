import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { ChemistModel } from '../models/chemist-model';

import { CoronaModel } from '../models/corona-model';
import { ErrorHandling } from './errorHandling';

@Injectable()
export class ChemistandcoronaService extends ErrorHandling {
  coronapath = 'https://api.collectapi.com/corona/countriesData';

  chemistpath = 'https://api.collectapi.com/health/dutyPharmacy';

  constructor(private http: HttpClient) {
    super();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      authorization: 'apikey 3J8d5BBrXqfmQ8RjdDhRef:4dEbxZPD6fDgoNLc10oxpi',
    }),
  };

  getCoronas(): Observable<CoronaModel> {
    return this.http.get<CoronaModel>(this.coronapath,this.httpOptions).pipe(
      tap((data) => {
        return this.tapIntercepter(data);
      }),
      catchError(this.handleError)
    );
  }

  getChemists(ilce: String, il: String): Observable<ChemistModel> {
    let pPath = this.decoratePath(il, ilce);

    return this.http.get<ChemistModel>(pPath,this.httpOptions).pipe(
      tap((data) => {
        return this.tapIntercepter(data);
      }),
      catchError(this.handleError)
    );
  }

  decoratePath(il: String, ilce: String): string {
    if (il || ilce) {
      this.chemistpath = this.chemistpath + '?';

      if (ilce) {
        this.chemistpath = this.chemistpath + 'ilce=' + ilce;
      }


      if (il) {

        if(ilce) this.chemistpath = this.chemistpath + '&';


        this.chemistpath = this.chemistpath + 'il=' + il;
      }

     
    }
    return this.chemistpath;
  }
}
