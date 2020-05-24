import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bodyBlogs'
})
export class BodyBlogsPipe implements PipeTransform {

  transform(body) {

    return body.substring(0, 200);

  }

}
