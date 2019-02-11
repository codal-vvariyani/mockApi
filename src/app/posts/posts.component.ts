import { Component, OnInit } from '@angular/core'
import { DialogService } from '../shared/dialog.service';
import { MatDialog } from '@angular/material';
import { PostService } from '../services/post.service';
import { postResponse } from '../shared/postResponse';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: postResponse[];


  constructor(private service: PostService,
    private dialog: MatDialog,
    private dialogService: DialogService) {
   }

////////////////CREATE POST///////////////////////
   createPost(input: HTMLInputElement) {
     let post = {title: input.value,
    body: "Exapmle",
    userId: 2};

     input.value = '';
      
     this.service.createPost(post)  
      .subscribe(response => {  
        post['id'] = response['id'];  
        this.posts.splice(0, 0, post);  
        console.log(response);  
      }); 
  }

//////////////GET POSTS////////////////////////////
getPosts()
{
  this.service.getPosts()  
      .subscribe(response => {  
        this.posts = response;  
      });
}

/////////////DELETE POST//////////////////////////
deletePost(post) {
  this.dialogService.openConfirmDialog('Are you sure you want to delete this record?')
  .afterClosed().subscribe(response =>{
    console.log(response);
    
    if(response){
      this.service.deletePost(post.id)  
      .subscribe(response => {  
        let index = this.posts.indexOf(post);  
        this.posts.splice(index, 1);  
      });
    }
  });
  
}  

  ngOnInit() {
    this.getPosts();
  }

}