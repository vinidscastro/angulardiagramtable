import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TodoModel } from '../models/todo.model';
import { UserModel } from '../models/user.model';
import { ContentService } from '../services/content.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  todos: TodoModel[];
  userList: UserModel[];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers(){
    this.contentService.getUserData().subscribe(resp => {
      this.userList = resp;
    })
  }

}
