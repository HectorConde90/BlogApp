import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './login.guard';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: 'main', pathMatch: 'full', redirectTo: '/main/home' },
  {
    path: 'main', component: MainComponent, canActivate: [LoginGuard], children: [
    { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
    {path: 'blog/:id', component: BlogComponent, canActivate: [LoginGuard]}
  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/main/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
