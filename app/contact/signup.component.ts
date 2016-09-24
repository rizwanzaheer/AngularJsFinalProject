import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/contact/signup.component.html'
})

export class SignUpComponent implements OnInit {
    registerForm: FormGroup;

    constructor(private _formbuilder: FormBuilder) {

    }

    ngOnInit() {
        this.registerForm = this._formbuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email: ['', Validators.required],
            passwordarea: this._formbuilder.group({
                password: ['', Validators.required],
                confirmpassword: ['', Validators.required],
            }),
            address: this._formbuilder.group({
                street: [],
                zip: [],
                city: [],
                country: []
            })
        });

    }

    onSubmit(data) {
        console.log(data);
    }
}