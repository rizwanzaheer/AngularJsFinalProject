// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Custom component's
import { AppComponent } from './app.component';
import { IndexComponent } from './public/index.component';
import { NavBarComponent } from './public/navbar.component';
import { FooterComponent } from './public/footer.component';
import { NotFoundComponent } from './public/not-found.component';

import { SharedModule }      from './public/shared.module';
import { UsersModule }       from './users/users.module';
import { PostsModule }       from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

import { usersRouting } from './users/users.routing';
import { postsRouting } from './posts/posts.routing';
import { authRouting } from './auth/auth.routing';
import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		SharedModule,
		UsersModule,
		PostsModule,
		FormsModule,
		ReactiveFormsModule,
		AuthModule,
		usersRouting,
		postsRouting,
		authRouting,
		routing,

	],
	declarations: [
		AppComponent,
		NavBarComponent,
		IndexComponent,
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
