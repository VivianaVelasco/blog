import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../interfaz/category';
import { Post } from '../interfaz/post';
import { User } from '../interfaz/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  

  @Input() post: Post = {
    id: -1,
    title: "",
    description: "",
    user: {} as User,
    category: {} as Category,
    createdAt: "",
    updatedAt: ""
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
