import { IUser } from "./user";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html",
})
export class UserComponent implements OnInit, OnDestroy {

  userSubcription: Subscription;
  user: IUser = { id: 0, name: "" };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // first
    console.log(this.route);

    // second with snapshot
    this.user.id = this.route.snapshot.params.id;
    this.user.name = this.route.snapshot.params.name;

    // third with observable
    this.userSubcription = this.route.params.subscribe((params: Params) => {
      this.user.id = params.id;
      this.user.name = params.name;
    });
  }

  ngOnDestroy(): void {
    this.userSubcription.unsubscribe();
  }
}
