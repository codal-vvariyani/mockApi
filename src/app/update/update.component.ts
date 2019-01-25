import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { postResponse } from '../shared/postResponse';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  private url = 'http://localhost:3000/posts';
  posts:postResponse[];
  strTitle: String;
  strBody: String;

  id = +this.route.snapshot.paramMap.get('id');
  constructor(private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDataToUpdate();
  }

  ////////////FETCH DATA TO BE UPDATED////////////////
  getDataToUpdate(){
    
    console.log(this.id);

    this.http.get<postResponse[]>(this.url+'/'+this.id)
  .subscribe(response => {
    this.posts = response;
    console.log(this.posts);
    }); 
  }

  ///////////UPDATE POST///////////////
  updateData(){
    let post = {title: this.strTitle,
    body: this.strBody};
      console.log("Title:"+this.strTitle);
      console.log("Body:"+this.strBody);

    this.http.patch(this.url+'/'+this.id, post)
      .subscribe(response => {
        console.log(response);
      });
  }
}