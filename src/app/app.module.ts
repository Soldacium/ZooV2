import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { NavComponent } from './nav/nav.component';
import { InputComponent } from './shared/components/input/input.component';
import { FishFightingComponent } from './fishes/fish-fighting/fish-fighting.component';
import { FishesComponent } from './fishes/fishes.component';
import { FishGoldenComponent } from './fishes/fish-golden/fish-golden.component';
import { ButtonFancyComponent } from './shared/components/button-fancy/button-fancy.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FishJellyComponent } from './fishes/fish-jelly/fish-jelly.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ButtonThreeComponent } from './shared/components/button-three/button-three.component';
import { ButtonThreeAltComponent } from './shared/components/button-three-alt/button-three-alt.component';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { BoxesDiamondComponent } from './shared/components/boxes-diamond/boxes-diamond.component';
import { LinksDiamondComponent } from './shared/components/links-diamond/links-diamond.component';
import { ButtonDiamondComponent } from './shared/components/button-diamond/button-diamond.component';
import { WaterCornerComponent } from '@shared/components/water-corner/water-corner.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
    TicketsComponent,
    ButtonComponent,
    NavComponent,
    InputComponent,
    FishFightingComponent,
    FishesComponent,
    FishGoldenComponent,
    ButtonFancyComponent,
    FishJellyComponent,
    AboutComponent,
    NewsComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    ButtonThreeComponent,
    ButtonThreeAltComponent,
    AdminPostsComponent,
    AdminOrdersComponent,
    BoxesDiamondComponent,
    LinksDiamondComponent,
    ButtonDiamondComponent,
    WaterCornerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
