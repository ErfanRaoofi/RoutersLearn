import { Component, OnInit } from "@angular/core";
import { IUser } from "../users/user/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-accounts",
  templateUrl: "accounts.component.html",
})
export class AccountsComponent implements OnInit {
  users: IUser[] = [
    { id: 1, name: "Test1" },
    { id: 2, name: "Test2" },
    { id: 3, name: "Test3" },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  onClick(id: number) {
    this.router.navigate(["/accounts", id, "edit"], {
      queryParams: { allowEdit: 1 },
      fragment: "paragraph1",
    });
  }
}
