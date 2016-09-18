// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { MdButtonModule } from '@angular2-material/button';
//import { MdCardModule } from '@angular2-material/card';

// Custom component's
import { AppComponent } from './app.component';
import { IndexComponent } from './public/index.component';
import { NavBarComponent } from './public/navbar.component';
import { FooterComponent } from './public/footer.component';
import { NotFoundComponent } from './public/not-found.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { SignUpComponent } from './contact/signup.component';
import { SignInComponent } from './contact/signin.component';
//import { ContactComponent } from './contact/contact.component';

// Custom Directive's
//import { HighlightDirective } from './highlight.directive';
//import { HighlightDirective as ContactHighlightDirective } from './contact/highlight.directive';

// Custom Service's
import { UserService } from './user/user.service';
//import { ContactService } from './contact/contact.service';

// Custom Pipe's
//import { AwesomePipe } from './contact/awesome.pipe'; 

import { routing } from './app.routing';

@NgModule({
	imports: [
			CommonModule,
			BrowserModule,
			FormsModule,
			routing,
			//MdButtonModule,
			//MdCardModule
			//RouterModule.forRoot(ContactsAppRoute)
	],
	declarations: [
			AppComponent,
			NavBarComponent,
			IndexComponent,
			UserComponent,
			PostComponent,
			SignUpComponent,
			SignInComponent,
//			HighlightDirective,
//			TitleComponent,
//			AwesomePipe,
//			ContactComponent,
//			ContactHighlightDirective,
			FooterComponent,
			NotFoundComponent
	],
	providers: [ 
			//ContactService, 
			UserService 
	],
    exports: [
       
    ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
