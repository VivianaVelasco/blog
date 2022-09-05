import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaz/post';

@Pipe({
  name: 'filtrarPost'
})
export class FiltrarPostPipe implements PipeTransform {

  transform(posts: Post[], selectValue?: string): any {
    return (selectValue && selectValue != 'Elige Una Categoria') ? posts.filter(post => post.category.nombre.localeCompare(selectValue)) : posts;
  }

}
