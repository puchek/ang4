import { Component, OnInit } from '@angular/core';
import {UsersService, UserType} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public Users: Array<UserType>;
  public qwer: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.Users = this.usersService.getUsers();
  }

  getUsers() {
    console.log('get Users');
    return this.usersService.getUsers();
  }
}
