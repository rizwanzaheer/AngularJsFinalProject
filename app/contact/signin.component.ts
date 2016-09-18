import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

@Component({
    templateUrl: 'app/contact/signin.component.html'
})

export class SignInComponent implements OnInit{
  //  form: FormGroup;
    constructor(//fb: FormBuilder
    ){

    }

    ngOnInit(){

    }
    
    onSubmit(){
        console.log('Login form data Submit!');
    }
}