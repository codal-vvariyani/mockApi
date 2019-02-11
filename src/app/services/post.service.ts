import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core';
import { postResponse } from '../shared/postResponse';
  
@Injectable({  
  providedIn: 'root'  
})  
export class PostService {  
  
  private url = 'http://localhost:3000/posts'; 
    
  constructor(private http: HttpClient) { }  
  
  getPosts() {  
    return this.http.get<postResponse[]>(this.url);  
  }
  
  getPost(id){
    return this.http.get<postResponse[]>(this.url+ "/" +id);
  }
  
  createPost(post) {  
    return this.http.post(this.url, post);
  }  
  
  updatePost(id, post){  
    return this.http.put(this.url + '/' + id, post);
  }  
  
  deletePost(id) {  
    return this.http.delete(this.url + '/' + id);  
  }
}  