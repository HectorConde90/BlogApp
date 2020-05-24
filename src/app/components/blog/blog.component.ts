import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any;

  constructor(private ruta: ActivatedRoute, private blogService: BlogsService) {
    this.blog = {};
   }

  ngOnInit(): void {

    this.getOneBlog();
  }

  async getOneBlog() {
    let id: string;
    this.ruta.params.subscribe(params => id = params.id);
    // console.log(id);
    this.blog = await this.blogService.getOneBlog(id);
    // console.log(this.blog);

  }
}
