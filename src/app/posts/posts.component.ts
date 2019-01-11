import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DialogService } from '../shared/dialog.service';
import { MatDialog } from '@angular/material';


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

  constructor(private http: HttpClient,
    private dialog: MatDialog,
    private dialogService: DialogService) {
   }

////////////////CREATE POST///////////////////////
   createPost(input: HTMLInputElement) {
     let post = {title: input.value};
     input.value = '';
      
     this.http.post<any>(this.url, JSON.stringify(post)).subscribe(response => {  
      post['id'] = response.id;
      this.posts.splice(0, 0, post);  
      console.log(response);
    });
  }

//////////////GET POST////////////////////////////
getPost()
{
  this.http.get<postResponse[]>(this.url)
  .subscribe(response => {
    this.posts = response;
    });
}
  
//////////////UPDATE POST/////////////////////////
  updatePost(id) {  
    this.http.patch(this.url + '/' + id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
  }  

/////////////DELETE POST//////////////////////////
deletePost(post) {
  this.dialogService.openConfirmDialog('Are you sure you want to delete this record?')
  .afterClosed().subscribe(response =>{
    console.log(response);
    
    if(response){
      this.http.delete(this.url + '/' + post.id)  
    .subscribe(response => {  
      let index = this.posts.indexOf(post);  
      this.posts.splice(index, 1);  
    });  
    }
  });
  
}  

  ngOnInit() {
    this.getPost();
  }

}