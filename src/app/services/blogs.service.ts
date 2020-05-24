import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  mainUrl: string;
  oneBlogUrl: string;

  constructor(private peticionHttp: HttpClient) {

    this.mainUrl = 'https://fakeblog.bel4.com/api/posts?page=1';
    this.oneBlogUrl = 'https://fakeblog.bel4.com/api/posts/1/show';
  }


  // Peticion de todos los blogs
  getAllBlogs(pPagina) {
    const url = `https://fakeblog.bel4.com/api/posts?page=${pPagina}`;
    return this.peticionHttp.get<any[]>(url).toPromise();
    // return this.peticionHttp.get(this.oneBlogUrl).toPromise();

  }

  // Peticion para un solo blog

  getOneBlog(pId) {
    const url = `https://fakeblog.bel4.com/api/posts/${pId}/show`;
    return this.peticionHttp.get<any[]>(url).toPromise();
  }

  getAllBlogsFeatured() {
    const url = 'https://fakeblog.bel4.com/api/posts/featured';
    return this.peticionHttp.get<any[]>(url).toPromise();
  }

  getAllPopulares() {
    const url = 'https://fakeblog.bel4.com/api/posts/popular';
    return this.peticionHttp.get<any[]>(url).toPromise();
    }
}
