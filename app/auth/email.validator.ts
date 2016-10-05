import { Directive } from '@angular/core';

@Directive({
  selector: '[validateEmail][ngModel]'
})
export class EmailValidator {}