import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from '../models/todo.model';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  todos: TodoModel[];
  totalTasks: number;
  complete;
  notComplete;
  percent;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    let list = [];
    this.contentService.getTodos().subscribe(data => {
      list = data;
      this.totalTasks = data.length;
      this.complete = data.filter(x => x.completed).length;
      this.notComplete = data.filter(x => !x.completed).length;
    });
  }

}
