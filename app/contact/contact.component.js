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
var core_1 = require('@angular/core');
var contact_service_1 = require('./contact.service');
var user_service_1 = require('../user.service');
var ContactComponent = (function () {
    function ContactComponent(contactService, userService) {
        this.contactService = contactService;
        this.msg = 'Loading contacts ...';
        this.userName = '';
        this.userName = userService.userName;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContacts().then(function (contacts) {
            _this.msg = '';
            _this.contacts = contacts;
            _this.contact = contacts[0];
        });
    };
    ContactComponent.prototype.next = function () {
        var ix = 1 + this.contacts.indexOf(this.contact);
        if (ix >= this.contacts.length) {
            ix = 0;
        }
        this.contact = this.contacts[ix];
    };
    ContactComponent.prototype.onSubmit = function () {
        // TODO: do something like save it
        this.displayMessage('Saved ' + this.contact.name);
    };
    ContactComponent.prototype.newContact = function () {
        this.displayMessage('New contact');
        this.contact = { id: 42, name: '' };
        this.contacts.push(this.contact);
    };
    /** Display a message briefly, then remove it. */
    ContactComponent.prototype.displayMessage = function (msg) {
        var _this = this;
        this.msg = msg;
        setTimeout(function () { return _this.msg = ''; }, 1500);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: 'app/contact/contact.component.html',
            styleUrls: ['app/contact/contact.component.css']
        }), 
        __metadata('design:paramtypes', [contact_service_1.ContactService, user_service_1.UserService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map