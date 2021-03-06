import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { NavComponent } from './nav/nav.component';
import { NavFishComponent } from './nav-fish/nav-fish.component';
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
import { PostComponent } from './post/post.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ButtonThreeComponent } from './shared/components/button-three/button-three.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NotFoundComponent,
    TicketsComponent,
    ButtonComponent,
    NavComponent,
    NavFishComponent,
    InputComponent,
    FishFightingComponent,
    FishesComponent,
    FishGoldenComponent,
    ButtonFancyComponent,
    FishJellyComponent,
    AboutComponent,
    NewsComponent,
    PostComponent,
    FooterComponent,
    LoginComponent,
    AdminComponent,
    ButtonThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
