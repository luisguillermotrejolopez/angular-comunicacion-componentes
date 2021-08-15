import { AbstractControl } from '@angular/forms';

export class UserValidator {
  static verificateSpaces(abstractControl: AbstractControl) {
    if (abstractControl.value == null) return null;

    if (abstractControl.value.indexOf(' ') > 0) {
      return { withoutSpaces: true };
    }

    return null;
  }
}
