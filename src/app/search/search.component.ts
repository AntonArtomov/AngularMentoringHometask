import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@types/selenium-webdriver/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string;

  constructor(
  //  private http: HttpClient
  ) { }

  ngOnInit() {
  }

  onSearchClick() {
  //  return this.http.send()
    console.log(this.searchText);
  }
}
