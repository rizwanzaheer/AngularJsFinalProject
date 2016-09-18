import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

@Component({
    templateUrl: 'app/contact/signup.component.html'
})

export class SignUpComponent implements OnInit{
    form: FormGroup;
    constructor(){

    }

    ngOnInit(){

    }
    
    onSubmit(){
        console.log('Form Submit');
    }
}