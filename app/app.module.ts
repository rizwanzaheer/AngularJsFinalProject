// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom component's
import { AppComponent } from './app.component';
import { IndexComponent } from './public/index.component';
import { NavBarComponent } from './public/navbar.component';
import { FooterComponent } from './public/footer.component';
import { SignUpComponent } from './contact/signup.component';
import { SignInComponent } from './contact/signin.component';
import { NotFoundComponent } from './public/not-found.component';

import { SharedModule }      from './public/shared.module';
import { UsersModule }       from './users/users.module';
import { PostsModule }       from './posts/posts.module';

import { usersRouting } from './users/users.routing';
import { postsRouting } from './posts/posts.routing';
import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		SharedModule,
		UsersModule,
		PostsModule,
		FormsModule,
		ReactiveFormsModule,
		usersRouting,
		postsRouting,
		routing,

	],
	declarations: [
		AppComponent,
		NavBarComponent,
		IndexComponent,
		//UsersComponent,
		//PostsComponent,
		SignUpComponent,
		SignInComponent,
		FooterComponent,
		NotFoundComponent
	],
	providers: [
	],
	exports: [

	],
	bootstrap: [AppComponent]
})
export class AppModule { }
