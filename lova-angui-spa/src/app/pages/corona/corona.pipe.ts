import { Pipe, PipeTransform } from '@angular/core';
import { Corona } from 'src/app/services/models/corona-model';

@Pipe({
  name: 'coronaFilter',
})
export class CoronaPipe implements PipeTransform {
  transform(val: Corona[], filterText?: any): Corona[] {
    filterText = filterText ? filterText!.toLocaleLowerCase() : null;

    return filterText
      ? val.filter(
          (corona: Corona) =>
            corona.country.toLocaleLowerCase().indexOf(filterText!) !== -1
        )
      : val;
  }
}
