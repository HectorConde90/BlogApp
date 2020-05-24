import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { BodyBlogsPipe } from './pipes/body-blogs.pipe';
import { MainComponent } from './components/main/main.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { PupularesComponent } from './components/pupulares/pupulares.component';
import { NameBlogsPipe } from './pipes/name-blogs.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    LoginComponent,
    BodyBlogsPipe,
    MainComponent,
    FeaturedComponent,
    PupularesComponent,
    NameBlogsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
