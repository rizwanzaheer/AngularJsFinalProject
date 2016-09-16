"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// angular
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
// Custom component's
var app_component_1 = require('./app.component');
//import { TitleComponent } from './title.component';
var navbar_component_1 = require('./navbar.component');
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
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                //			HighlightDirective,
                //			TitleComponent,
                // app/contact declarations
                //			AwesomePipe,
                //			ContactComponent,
                //			ContactHighlightDirective,
                navbar_component_1.NavBarComponent
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map