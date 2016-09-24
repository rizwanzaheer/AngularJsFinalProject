import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
    //selector: 'router-outlet',
    templateUrl: 'app/public/index.component.html'
})

export class IndexComponent implements OnInit {
    userName;
    constructor(_userService: UserService) {
        this.userName = _userService.userName;
    }

    ngOnInit() {

    }
}