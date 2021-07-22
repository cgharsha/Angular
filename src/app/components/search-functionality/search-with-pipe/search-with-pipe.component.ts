import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-with-pipe',
  templateUrl: './search-with-pipe.component.html',
  styleUrls: ['./search-with-pipe.component.scss']
})
export class SearchWithPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: any;
  category: any;
  
  array = [
    {
      name: 'Ali',
      catName: 'Human'
    },
    {
      name: 'Ahmed',
      catName: 'Human'
    },
    {
      name: 'Alexa',
      catName: 'Robot'
    },
    {
      name: 'Tom',
      catName: 'Robot'
    },
    {
      name: 'Thompson',
      catName: 'Human'
    },
    {
      name: 'Peter',
      catName: 'Human'
    },
    {
      name: 'Peshawar',
      catName: 'City'
    }
  ];

}
