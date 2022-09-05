import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaz/post';
import { User } from '../interfaz/user';
import { PostService } from '../service/post.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title: string = "Mi Posts"
  user: User;

  myPosts: Post[] = [];
  constructor(private postService: PostService, private userService: UserService) { 
    this.user = this.userService.myuser
  }

  ngOnInit(): void {
    console.log(this.user.id)
    this.postService.getPostByUser(this.user.id).subscribe((posts: any) => {
      this.myPosts = posts as Post[]
    })
  }


}
