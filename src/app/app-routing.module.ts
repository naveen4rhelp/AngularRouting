import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { BlogComponent } from './blog/blog/blog.component';
import { NewsComponent } from './news/news/news.component';
import { ContactComponent } from './contact/contact/contact.component';
import { TeamComponent } from './team/team/team.component';
import { SingleblogComponent } from './singleblog/singleblog/singleblog.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {path : 'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path : 'blog',component:BlogComponent},
  {path : 'news',component:NewsComponent},
  {path : 'contact',component:ContactComponent},
  {path : 'team',component:TeamComponent},
  {path: 'singleblog',component:SingleblogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
