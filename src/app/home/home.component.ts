import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaz/category';
import { Post } from '../interfaz/post';
import { CategoryService } from '../service/category.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title_home: string = "Home";
  posts: Post[] = [{
    id: -1,
    title: "",
    description: "",
    user: {
      id: -1,
      name: "",
      lastname: "",
      phone_number: "",
      email: "",
      password: "",
      createdAt: "",
      updatedAt: ""
    },
    category: {
      id: -1,
      nombre: "",
      createdAt: "",
      updatedAt: ""
    },
    createdAt: "",
    updatedAt: ""
  }]

  categories: Category[] = [{
    id: -1,
    nombre: "",
    createdAt: "",
    updatedAt: ""
  }]

  constructor(private postService: PostService, private categoryService: CategoryService) { 

  }

  ngOnInit(): void {
    this.postService.getAllPost().subscribe((res: any) => {
      this.posts = res as Post[]
    })
    this.categoryService.getAllCategories().subscribe((res: any) => {
      this.categories = res as Category[]
    })
  }

}
