import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameBlogs'
})
export class NameBlogsPipe implements PipeTransform {

  transform(name: string)  {
    return name.substring(0, 20);
  }

}
