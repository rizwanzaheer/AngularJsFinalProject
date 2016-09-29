import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { SignInComponent } from './signin.component';
import { SignUpComponent } from './signup.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    exports: [

    ],
    providers: [

    ]

})

export class AuthModule {

}

