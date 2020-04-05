import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  OpenUsers() {
    this.router.navigateByUrl('/users');
  }

  OpenAcoounts() {
    this.router.navigate(['/accounts'], {relativeTo: this.route});
  }
}
