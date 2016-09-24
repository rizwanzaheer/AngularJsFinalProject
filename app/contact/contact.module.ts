import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { AwesomePipe }          from './awesome.pipe';

//import { SignUpComponent }      from './signup.component';
//import { SignInComponent }      from './signin.component';
import { ContactComponent }     from './contact.component';
import { ContactService }       from './contact.service';
import { HighlightDirective }   from './highlight.directive';
import { routing }              from './contact.routing';

@NgModule({
  imports:      [ CommonModule, FormsModule, routing ],
  declarations: [ 
        ContactComponent,
        HighlightDirective, 
        AwesomePipe,
		//SignUpComponent,
		//SignInComponent, 
  ],
 // exports:      [ ContactComponent ],
  providers:    [ ContactService ]
})
export class ContactModule { }
