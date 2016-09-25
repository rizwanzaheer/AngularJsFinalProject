import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from './test';

@Component({
    templateUrl: 'app/contact/signin.component.html'
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