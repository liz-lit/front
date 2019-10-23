import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  public student;

  ngOnInit() {
    let students = this.apiService.getStudents().subscribe(student => this.student = student);
  }

}
