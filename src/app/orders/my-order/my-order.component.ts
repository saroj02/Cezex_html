import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class MyOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
