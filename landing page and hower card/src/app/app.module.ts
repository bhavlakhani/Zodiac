import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchModelComponent } from './search-model/search-model.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieServiceService } from './movie-service.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth.guard';
import { EmbedVideo } from 'ngx-embed-video';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyfavouriteComponent } from './myfavourite/myfavourite.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchModelComponent,
    SearchListComponent,
    FooterComponent,
    SingleMovieComponent,
    WelcomeComponent,
    MyfavouriteComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule ,
    EmbedVideo.forRoot() ],
  providers: [AuthGuard, MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
