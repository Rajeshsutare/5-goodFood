import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-carasoul', 
  templateUrl: './carasoul.component.html',
  styleUrls: ['./carasoul.component.scss']
})
export class CarasoulComponent implements OnInit {
public customOptions !:OwlOptions;
  constructor() { }

  ngOnInit(): void {

  this.customOptions= {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        1: {
          items: 2
        },
        2: {
          items: 3
        },
      },
      nav: false
    }
  }

}
