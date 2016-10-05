import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/auth/signup.component.html'
})

export class SignUpComponent implements OnInit {
    registerForm: FormGroup;
    countries = ["Pakistan", "UK", "USA", "UAE", "KSA", "Australia", "Ireland", "Brazil", "China", "Indonesia"];

    constructor(private _formbuilder: FormBuilder) { }

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
                street: ['', Validators.minLength(3)],
                zip: ['', Validators.pattern('[0-9]{5}')],
                city: ['', Validators.minLength(3)],
                country: ['', Validators.minLength(3)]
            })
        });

    }

    onSubmit(data) {
        console.log(data);
    }
}