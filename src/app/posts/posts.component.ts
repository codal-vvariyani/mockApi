import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private http: HttpClient) {
    this.http.get('http:/192.168.1.158')
    .subscribe(response => {
      console.log(response);
    });
   }

  ngOnInit() {
  }

}
