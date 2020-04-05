import { UserService } from './user.sevice';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from './user/user';

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html'
})

export class UsersComponent implements OnInit {

  users: IUser[] = [{id: 0, name: ''}];

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
   }
}
