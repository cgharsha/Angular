import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  users = [
    {
      id: 1,
      name: 'Harsha'
    },
    {
      id: 2,
      name: 'Deepika'
    },
    {
      id: 3,
      name: 'Vivek'
    }
  ];

  ngOnInit(): void {
  }

  

}
