import { throwError } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandling {
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel bir hata ';
    }


    let errorDiv = document.querySelector("#errorDiv") as HTMLDivElement;
    errorDiv.innerText=JSON.stringify(err.error.message);

    console.log(err.error.message);
    return throwError(() => new Error(errorMessage));
  }

  tapIntercepter(data: any): void {

    let infoDiv = document.querySelector("#infoDiv") as HTMLDivElement;

  //  infoDiv.innerText="ERRORRRRRRR";

  infoDiv.innerText=JSON.stringify(data);

    //  console.log(JSON.stringify(data));
  }
}
