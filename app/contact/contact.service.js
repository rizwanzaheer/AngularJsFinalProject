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
var Contact = (function () {
    function Contact(id, name) {
        this.id = id;
        this.name = name;
    }
    return Contact;
}());
exports.Contact = Contact;
var CONTACTS = [
    new Contact(21, 'Sam Spade'),
    new Contact(22, 'Nick Danger'),
    new Contact(23, 'Nancy Drew')
];
var FETCH_LATENCY = 500;
var ContactService = (function () {
    function ContactService() {
    }
    ContactService.prototype.getContacts = function () {
        return new Promise(function (resolve) {
            setTimeout(function () { resolve(CONTACTS); }, FETCH_LATENCY);
        });
    };
    ContactService.prototype.getContact = function (id) {
        return this.getContacts()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === +id; }); });
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map