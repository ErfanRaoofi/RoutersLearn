import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: 'edit-account.component.html'
})

export class EditAccountComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // first show in console
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(
      (query) => {
        console.log(query);
      }
    );


    this.route.fragment.subscribe(
      (fragment) => {
        console.log(fragment);
      }
    );
  }
}
