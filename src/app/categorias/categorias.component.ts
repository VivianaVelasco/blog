import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../interfaz/category';
import { Post } from '../interfaz/post';
import { CategoryService } from '../service/category.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  posts: Post[] = [];
  categories: Category[] = [];

  title_categories: string = 'Categorias';

  constructor(
    private postService: PostService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((categories: any) => {
      this.categories = categories as Category[];
    });
  }

  onChangeSelect(selectValue: any) {
    let value = selectValue.target.value
    this.postService.getPostByCategoryForFireBase(value).subscribe((posts: any) => {
      this.posts = posts as Post[];
    });
  }



}
