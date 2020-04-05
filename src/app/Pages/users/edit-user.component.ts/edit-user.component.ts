import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.sevice';
import { Subscription } from 'rxjs';
import { IUser } from '../user/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: 'edit-user.component.html'
})

export class EditUserComponent implements OnInit, OnDestroy {

  userId;
  userName;

  userSubscription: Subscription;
  user: IUser;

  allowEdit = false;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getuser(+params.id);
      }
    );

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit  = queryParams.allowEdit === '1' ? true : false;
      }
    );
    this.userId = this.user.id;
    this.userName = this.user.name;

  }

  onSave() {}

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
