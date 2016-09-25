import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
    //selector: 'router-outlet',
    templateUrl: 'app/public/index.component.html'
})

export class IndexComponent implements OnInit {
    userName = "Rizwan";
    constructor(_userService: UserService) {
        //this.userName = _userService.userName;
    }

    ngOnInit() {

    }
}