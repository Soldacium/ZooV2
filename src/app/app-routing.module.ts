import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FishFightingComponent } from './fishes/fish-fighting/fish-fighting.component';
import { FishesComponent } from './fishes/fishes.component';
import { FishGoldenComponent } from './fishes/fish-golden/fish-golden.component';
import { FishJellyComponent } from './fishes/fish-jelly/fish-jelly.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminManageUsersComponent } from './admin/admin-manage-users/admin-manage-users.component';
import { LoginGuardGuard } from '@shared/guards/login-guard.guard';
import { FishAngelComponent } from './fishes/fish-angel/fish-angel.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'fishes',
    component: FishesComponent,
    children: [
      { path: 'fighting', component: FishFightingComponent, data: {animation: 'FishFighting'} },
      { path: 'golden', component: FishGoldenComponent, data: {animation: 'FishGolden'}},
      { path: 'jelly', component: FishJellyComponent, data: {animation: 'FishJelly'}},
      { path: 'angel', component: FishAngelComponent, data: {animation: 'FishAngel'}},
    ]
  },
  {
    path: 'news', 
    component: NewsComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  { // guard here
    path: 'admin', 
    component: AdminComponent,
    canActivate: [LoginGuardGuard],
    children: [
      { path: 'posts', component: AdminPostsComponent },
      { path: 'orders', component: AdminOrdersComponent },
      { path: 'users', component: AdminManageUsersComponent}
    ]
  },
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
