// angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { RouterModule } from '@angular/router';

// Custom component's
import { AppComponent }   from './app.component';
//import { TitleComponent } from './title.component';
import { NavBarComponent } from './navbar.component';

	//   app/contact 
//import { ContactComponent } from './contact/contact.component';

// Custom Directive's
//import { HighlightDirective } from './highlight.directive';
	//  app/contact 
//import { HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive';


// Custom Service's
//import { UserService } from './user.service';
//import { ContactService } from './contact/contact.service';

// Custom Pipe's
//import { AwesomePipe } from './contact/awesome.pipe'; 


@NgModule({
	imports: [
			CommonModule,
			BrowserModule,
			FormsModule,
			//RouterModule.forRoot(ContactsAppRoute)
	],
	declarations: [
			AppComponent,
//			HighlightDirective,
//			TitleComponent,
		// app/contact declarations
//			AwesomePipe,
//			ContactComponent,
//			ContactHighlightDirective,
			NavBarComponent
	],
	providers: [ 
			//ContactService, 
			//UserService 
	],
    exports: [
       
    ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
