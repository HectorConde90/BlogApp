import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrBlogs: any[];
  pagina: number;
  constructor(private postsService: BlogsService) {

    this.arrBlogs = [];
    this.pagina = 1;

  }

  ngOnInit(): void {

    this.getAllBlogs();
  }

  // Funcion para traer todos los blogs
  async getAllBlogs() {
    const blogs = await this.postsService.getAllBlogs(this.pagina);
    // console.log(blogs);
    this.arrBlogs = blogs['data'];
    // console.log(blogs);
    // console.log(this.arrBlogs);
  }

  async cambiarPagina($event) {
    const pag = $event.target.dataset.pagina;
    switch (pag) {
      case 'prev':
        if (this.pagina === 0) {
          this.pagina = 0;
        } else {
          this.pagina -= 1;
        }
        break;
      case 'next1':
        if (this.pagina === 1) {
          this.pagina += 1;
        } else {
          this.pagina -= 1;
        }

        break;
      case 'next2':
        if (this.pagina === 24 || this.pagina === 25) {
          this.pagina += 0;
        } else {
          this.pagina += 2;
        }
        
        break;
      case 'next':
        if (this.pagina === 25) {
          this.pagina += 0;
        } else {
          this.pagina += 1;
        }
        break;
    }
    const blogs = await this.postsService.getAllBlogs(this.pagina);
    console.log(blogs);
    this.arrBlogs = blogs['data'];
    
    // console.log(this.pagina);
 }

}
