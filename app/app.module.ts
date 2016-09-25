// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//import { MdButtonModule } from '@angular2-material/button';
//import { MdCardModule } from '@angular2-material/card';

// Custom component's
import { AppComponent } from './app.component';
import { IndexComponent } from './public/index.component';
import { NavBarComponent } from './public/navbar.component';
import { FooterComponent } from './public/footer.component';
import { SignUpComponent } from './contact/signup.component';
import { SignInComponent } from './contact/signin.component';
import { NotFoundComponent } from './public/not-found.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';

import { ContactModule } from './contact/contact.module';

import { UserService } from './users/user.service';

import { usersRouting } from './users/users.routing';
import { routing } from './app.routing';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		routing,
		ReactiveFormsModule,
		HttpModule
		//MdButtonModule,
		//MdCardModule
		//RouterModule.forRoot(ContactsAppRoute)
	],
	declarations: [
		AppComponent,
		NavBarComponent,
		IndexComponent,
		UsersComponent,
		PostComponent,
		SignUpComponent,
		SignInComponent,
		FooterComponent,
		NotFoundComponent
	],
	providers: [
		//ContactService, 
		UserService
	],
	exports: [

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
