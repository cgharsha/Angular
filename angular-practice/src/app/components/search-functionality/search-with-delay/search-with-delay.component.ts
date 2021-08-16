import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-with-delay',
  templateUrl: './search-with-delay.component.html',
  styleUrls: ['./search-with-delay.component.scss']
})
export class SearchWithDelayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  typingTimer: any;
  filteredItems:any[] = [];
  isSearchValue: boolean = false;
  doneTypingInterval = 1000;
  searchValue: string = '';
  continents = [
    {
      id: 1,
      name: 'Asia',
      population: '4,157,300,000'
    },
    {
      id: 2,
      name: 'Africa',
      population: '1,030,400,000'
    },
    {
      id: 3,
      name: 'Europe',
      population: '738,600, 000'
    },
    {
      id: 4,
      name: 'North America',
      population: '461,114,000'
    },
    {
      id: 5,
      name: 'South America',
      population: '390,700,000'
    },
    {
      id: 6,
      name: 'Australia',
      population: '36,700,000'
    },
    {
      id: 7,
      name: 'Antartica',
      population: 0
    }
  ];

  async keyupResults() {
    clearTimeout(this.typingTimer);
    // this.typingTimer = setTimeout(
    //   this.searchByValue(this.continents),
    //   this.doneTypingInterval
    // );
    // console.log('Key Up');
    this.typingTimer = setTimeout(() => {
      this.filteredItems = this.searchByValue(this.continents);
      this.isSearchValue = true;
    }, this.doneTypingInterval);
    // this.filteredItems = this.searchByValue(this.continents);
  }

  searchByValue(continents:any) {
    return continents.filter((item:any) => {
      if (this.searchValue.trim() === '') {
        return true;
      } else {
        return item.name
          .toLowerCase()
          .includes(this.searchValue.trim().toLocaleLowerCase());
      }
    });
  }

  async keydownResults() {
    clearTimeout(this.typingTimer);
    // this.isSearchValue = false;
    // console.log('Key Down');
  }

  focusOutFunction() {
    console.log('Focus Out');
    // this.isSearchValue = false;
  }

  selectSearch(country:any) {
    console.log(country);
    this.searchValue = country.name;
    this.isSearchValue = false;
  }

}
