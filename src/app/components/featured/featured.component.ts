import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  arrFeatured: any;

  constructor(private blogService: BlogsService) { 
    this.arrFeatured = [];
  }

  ngOnInit(): void {
    this.getAllBlogsFeatured();
  }

  async getAllBlogsFeatured() {

    this.arrFeatured = await this.blogService.getAllBlogsFeatured();
    const num = Math.floor(Math.random() * (16 - 0)) + 0;
    this.arrFeatured = this.arrFeatured.data.splice(num, 4);

  }
}
