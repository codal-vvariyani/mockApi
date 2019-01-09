import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


export interface postResponse {
  body?: string;
  id?: Number;
  title?: string;
  userId?: Number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: postResponse[];
  
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    this.http.get<postResponse[]>(this.url)
    .subscribe(response => {
      this.posts = response;
      });
   }

   createPost(input: HTMLInputElement) {
     let postTitle = {title: input.value}; 
    this.http.post(this.url, JSON.stringify(postTitle)).subscribe(response => {  
      console.log(response); 
    });
  } 

  ngOnInit() {
  }

}
