import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from './test';

@Component({
    templateUrl: 'app/contact/signin.component.html'
})

export class SignInComponent implements OnInit {
    test = new Test();
    //form: FormGroup;
    constructor(//fb: FormBuilder
    ) {

    }

    ngOnInit() {

    }

    onSubmit(value) {
        console.log(value);
    }
}