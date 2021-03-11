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
    path: 'fishes',
    component: FishesComponent,
    // redirectTo: 'fishes/fighting',
    children: [
      { path: 'fighting', component: FishFightingComponent, data: {animation: 'FishFighting'} },
      { path: 'golden', component: FishGoldenComponent, data: {animation: 'FishGolden'}},
      { path: 'jelly', component: FishJellyComponent, data: {animation: 'FishJelly'}},
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
    children: [
      { path: 'posts', component: AdminPostsComponent },
      { path: 'orders', component: AdminOrdersComponent },
    ]
  },
  {
    path: 'tickets',
    component: TicketsComponent
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
