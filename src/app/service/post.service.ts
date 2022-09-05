import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaz/post';
import { filter, toArray, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url: string = 'http://localhost:3000/api/posts';
  url_firebase: string = 'https://posts-3ed53-default-rtdb.firebaseio.com/post.json';

  constructor(private httpclient: HttpClient) {}

  getAllPost() {
    return this.httpclient.get(this.url);
  }

  getPostByCategory(category: string) {
    return this.httpclient
      .get(this.url)
      .pipe(
        map((allPosts: any) => allPosts.filter((post: any) => post.category.nombre === category, toArray()))
      );
  }

  getPostByUser(user_id: number) {
    return this.httpclient
    .get(this.url)
    .pipe(
      map((allPosts: any) => allPosts.filter((post: any) => post.user.id === user_id, toArray()))
    );
  }

  getPostById(id: number) {
    return this.httpclient.get(`${this.url}/${id}`);
  }

  createPost(post: Post) {
    return this.httpclient.post(this.url, post);
  }
  getPostByCategoryForFireBase(category: string) {
    return this.httpclient
      .get(this.url_firebase)
      .pipe(map((allPosts: any) => allPosts.filter((post: any) => post.category.nombre === category, toArray()))
      );
  }

}
