import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable()
export class AlertifyService {
  constructor() {}
  success(message: string): void {
    alertify.success(message);
  }

  error(message: string): void {
    alertify.error(message);
  }

  warning(message: string): void {
    alertify.warning(message);
  }

  message(message: string): void {
    alertify.success(message);
  }

  confirm(message: string): boolean {
    let retval: boolean=false

  retval=confirm(message)  ;

    return retval;
  }
}
