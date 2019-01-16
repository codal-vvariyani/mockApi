import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
export interface postResponse {
  body?: string;
  id?: Number;
  title?: string;
  userId?: Number;
}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  posts:postResponse[];
  private url = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    this.getDataToView();
  }

  getDataToView(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    
    this.http.get<postResponse[]>(this.url+'/'+id)
  .subscribe(response => {
    this.posts = response;
    console.log(this.posts);
    });

  }

}
