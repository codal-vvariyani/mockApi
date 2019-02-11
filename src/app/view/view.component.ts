import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postResponse } from '../shared/postResponse';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  posts:any;
  
  constructor(private route: ActivatedRoute,
  private service: PostService) { }

  ngOnInit() {
    this.getDataToView();
  }

  getDataToView(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    
  this.service.getPost(id).subscribe(response => {  
    this.posts = response;  
  });
  }

}
