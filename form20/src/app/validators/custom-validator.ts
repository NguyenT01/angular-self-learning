import { inject } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { UserService } from '../services/user-service';

export class CustomValidator {
  readonly userService = inject(UserService);

  static isOldEnough(
    control: AbstractControl<Date | null>
  ): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
  }

  static containsAtleastNumberInString(numberOfDigits: number): ValidatorFn {
    return (
      control: AbstractControl<string | null>
    ): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp(`\\d{${numberOfDigits - 1},}`);
      const isValid = regex.test(control.value);
      return isValid
        ? null
        : { notMinimumNumberDigitInString: { minLength: numberOfDigits } };
    };
  }
}
