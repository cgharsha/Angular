import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-with-option',
  templateUrl: './search-with-option.component.html',
  styleUrls: ['./search-with-option.component.scss']
})
export class SearchWithOptionComponent implements OnInit {


  ngOnInit(): void {
  }

  filterOption: string = 'all';
  searchValue: string = '';
  items = [{
    project: 'Ambassador',
    type: 'ionic'
  }, {
    project: 'Ambassador Web',
    type: 'angular'
  }, {
    project: 'Deep Pocket',
    type: 'angular'
  }, {
    project: 'Attendance app',
    type: 'react'
  }];

  filteredItems:Array<any> = [];

  constructor() {
    this.updateResults();
  }

  async updateResults() {
    this.filteredItems = this.filterByOption(this.searchByValue(this.items));
  }

  searchByValue(items:any) {
    return items.filter((item:any) => {
      if (this.searchValue.trim() === '') {
        return true;
      } else {
        return item.project.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase()) || item.type.toLowerCase().includes(this.searchValue.trim().toLocaleLowerCase());
      }
    })
  }

  filterByOption(items:any) {
    return items.filter((item:any) => {
      if (this.filterOption === 'all' || this.filterOption === item.type) {
        return true;
      } 
      return null
    })
  }

}
