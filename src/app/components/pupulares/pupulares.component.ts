import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-pupulares',
  templateUrl: './pupulares.component.html',
  styleUrls: ['./pupulares.component.css']
})
export class PupularesComponent implements OnInit {

  arrPopulares: any;

  constructor(private blogService: BlogsService) { 

    this.arrPopulares = [];
  }

  ngOnInit(): void {
    this.getAllPopulars();
  }

  async getAllPopulars() {
    this.arrPopulares = await this.blogService.getAllPopulares();
    const num = Math.floor(Math.random() * (16 - 0)) + 0;
    this.arrPopulares = this.arrPopulares.data.splice(num, 4);
  }
}
