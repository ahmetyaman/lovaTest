import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/services/models/user';

@Pipe({
  name: 'userFilter',
})
export class UserFilterPipe implements PipeTransform {
  transform(val: User[], filterText?: any): User[] {
    filterText = filterText ? filterText!.toLocaleLowerCase() : null;

    return filterText
      ? val.filter(
          (user: User) =>
            user.userName.toLocaleLowerCase().indexOf(filterText!) !== -1
        )
      : val;
  }
}
