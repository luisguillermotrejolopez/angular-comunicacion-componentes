import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { map, tap } from 'rxjs/operators';

export function checkUserName(api: any): AsyncValidatorFn {
  return (abstractControl: AbstractControl) => {
    return api.checkUserName(abstractControl.value).pipe(
      tap((data) => {
        console.log(data);
      }),
      map(({ result }) => (result ? { value: true } : false))
    );
  };
}
