import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: component-selector
  selector: '[validateLocation]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }
  ]
})
export class LocationValidator implements Validator {

  validate(formGroup: FormGroup): { [key: string]: any} {
    // debugger
    const addressControl = formGroup.controls.address;
    const city = formGroup.controls.city;
    const country = formGroup.controls.country;
    const onlineUrlControl = ( formGroup.root as FormGroup).controls.onlineUrl;
    if ((addressControl && addressControl.value && city && city.value
      && country && country.value) || (onlineUrlControl && onlineUrlControl.value)) {
        return null;
      } else {
        return { validateLocation: false };
      }
  }

}
