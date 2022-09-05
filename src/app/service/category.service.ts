import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url: string = "http://localhost:3000/api/categories"

  constructor(private httpclient: HttpClient) { }

  getAllCategories() {
    return this.httpclient.get(this.url)
  }
}
