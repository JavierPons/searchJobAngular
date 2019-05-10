import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
userName: string = '';
response: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search(){
    this.http.get('https://jobs.search.gov/jobs/search.json?query=' + this.userName)
    .subscribe((response) => {
      this.response = response;
      console.log(response)
    })
  }

}
