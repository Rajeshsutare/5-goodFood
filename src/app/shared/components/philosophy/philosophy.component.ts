import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss']
})
export class PhilosophyComponent implements OnInit {
@Input() data !:any;
  constructor() { }

  ngOnInit(): void {
  }

}
