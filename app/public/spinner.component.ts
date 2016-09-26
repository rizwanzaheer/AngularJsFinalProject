import { Component, Input } from '@angular/core';

@Component({
    selector: 'spinner',
    template: `
    	<i *ngIf="visible" class="spinnerStyle fa fa-spinner fa-spin fa-5x"></i>
    `,
    styles:[`
        .spinnerStyle{
            position:abslute;

        }
    `]
})
export class SpinnerComponent { 
    @Input() visible = true; 
}
