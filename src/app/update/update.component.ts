import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postResponse } from '../shared/postResponse';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  private url = 'http://localhost:3000/posts';
  posts:any;
  strTitle: String;
  strBody: String;

  id = +this.route.snapshot.paramMap.get('id');
  constructor(private service: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDataToUpdate();
  }

  ////////////FETCH DATA TO BE UPDATED////////////////
  getDataToUpdate(){
    console.log(this.id);
    this.service.getPost(this.id).subscribe(response => {  
      this.posts = response;
    });
  }

  ///////////UPDATE POST///////////////
  updateData(){
    let post = {title: this.strTitle,
    body: this.strBody};
      console.log("Title:"+this.strTitle);
      console.log("Body:"+this.strBody);

    this.service.updatePost(this.id, post).subscribe(response => {
      console.log(response);
    });
  }
}