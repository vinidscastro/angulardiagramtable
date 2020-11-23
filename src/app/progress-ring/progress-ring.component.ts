import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-ring',
  templateUrl: './progress-ring.component.html',
  styleUrls: ['./progress-ring.component.scss']
})
export class ProgressRingComponent implements OnInit {

  progressPerc: number = 0;
  @Input() size: number = 0;
  @Input() tasks: number = 0;
  @Input() currentTasks: number = 0;
  @Input() title: string;
  @Input() completeColor: string;
  dashOffset: number = 0;
  halfsize: number = 0;
  radius: number = 0;
  circumference: number = 0;
  numberValue: number = 0;
  boxSize: number = 0;
  constructor() {

  }

  ngOnInit() {
    this.halfsize = this.size / 2;
    this.boxSize = this.size + 20;
    this.radius = (this.size / 2) - (4 * 2);
    this.circumference = 2 * Math.PI * this.radius;
    console.log(this.tasks);
  }

  ngAfterVIewInit() {

  }

  progress(value: number) {
    let progress = value / 100;
    this.dashOffset = this.circumference * (1 - progress);
  }


  calculatePercent(total, current) {
    let perc = (current * 100) / total;
    this.progress(perc);
    return perc;

  }


}
