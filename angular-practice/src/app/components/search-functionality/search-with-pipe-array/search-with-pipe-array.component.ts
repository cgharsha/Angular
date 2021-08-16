import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-with-pipe-array',
  templateUrl: './search-with-pipe-array.component.html',
  styleUrls: ['./search-with-pipe-array.component.scss']
})
export class SearchWithPipeArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // name = new FormControl('');
  // category = new FormControl(''); 
  name: any;
  category: any;

  array:Array<{name:string, catName:string}> = [
    {
      name: 'Ali',
      catName: 'Human',
    },
    {
      name: 'Ahmed',
      catName: 'Human',
    },
    {
      name: 'Alexa',
      catName: 'Robot',
    },
    {
      name: 'Tom',
      catName: 'Robot',
    },
    {
      name: 'Thompson',
      catName: 'Human',
    },
    {
      name: 'Peter',
      catName: 'Human',
    },
    {
      name: 'Peshawar',
      catName: 'City',
    },
  ]

}
