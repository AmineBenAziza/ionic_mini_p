import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  newPost$ = BehaviorSubject<Post>(null);
  editPost$ = BehaviorSubject<Post>(null);
  deletePost$ = BehaviorSubject<Post>(null);
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  save(post: Post):Observable<Post>{
    return this.http.post<post>(this.url + 'posts', post);
  }
  getPost(id: Number):Observable<Post>{
    return this.http.get<post>(this.url + 'posts/'+ id);
  }
  getPosts():Observable<Post[]>{
    return this.http.get<post[]>(this.url + 'posts');
  }
  editPost(post: Post):Observable<Post>{
    return this.http.put<post>(this.url + 'posts/'+ post.id, post);
  }
  deletePost(id: Number):Observable<any>{
    return this.http.delete<post>(this.url + 'posts/'+ id);
  }
}
