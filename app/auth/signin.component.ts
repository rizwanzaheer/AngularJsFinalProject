import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from '../contact/test';

@Component({
    templateUrl: 'app/auth/signin.component.html'
})

export class SignInComponent implements OnInit {
    test = new Test();
    constructor() { }

    ngOnInit() {

    }

    onSubmit(value) {
        console.log(value);
    }
}