import { UserService } from './../user.sevice';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';

import { IUser } from "./user";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html",
})
export class UserComponent implements OnInit, OnDestroy {

  userSubcription: Subscription;
  // user: IUser = { id: 0, name: "" };

  users: IUser[] = [{ id: 0, name: "" }];
  user: IUser;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    // first
    // console.log(this.route);

    // second with snapshot
    // this.user.id = this.route.snapshot.params.id;
    // this.user.name = this.route.snapshot.params.name;

    // third with observable
    // this.userSubcription = this.route.params.subscribe((params: Params) => {
    //   this.user.id = params.id;
    //   this.user.name = params.name;
    // });

    // fourth dynamic shows
    this.users = this.userService.getUsers();
    this.user = this.userService.getuser(+this.route.snapshot.params.id);

  }

  ngOnDestroy(): void {
    // this.userSubcription.unsubscribe();
  }
}
