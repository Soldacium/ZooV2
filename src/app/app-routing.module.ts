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
    children: [
      { path: 'fighting', component: FishFightingComponent, data: {animation: 'WelcomePage'} },
      { path: 'golden', component: FishGoldenComponent, data: {animation: 'PostsListPage'}},
      { path: 'jelly', component: FishJellyComponent, data: {animation: 'PostsListPage'}},
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
    component: AdminComponent
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
