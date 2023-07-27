import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-login-spinner',
  template: '<div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./loading-spinner.component.css']
})

export class LoadingSpinnerComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
