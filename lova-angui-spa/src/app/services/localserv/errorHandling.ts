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
    console.log(err.error.message);
    return throwError(() => new Error(errorMessage));
  }

  tapIntercepter(data: any): void {
    //  console.log(JSON.stringify(data));
  }
}
