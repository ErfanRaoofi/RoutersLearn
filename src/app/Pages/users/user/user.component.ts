import { UserService } from './../user.sevice';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
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

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {}

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
    // this.users = this.userService.getUsers();
    // this.user = this.userService.getuser(+this.route.snapshot.params.id);

    // fifth child in routing
    this.userSubcription = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getuser(+params.id);
      }
    );
  }

  editUser() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

  ngOnDestroy(): void {
     this.userSubcription.unsubscribe();
  }


}
