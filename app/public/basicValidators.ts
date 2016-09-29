//import { Control } from '@angular/common';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export class BasicValidators{
    static email(control: AbstractControl){
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = regEx.test(control.value);
        return valid ? null : { email: true };
    }
}