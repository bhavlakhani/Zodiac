import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './search-list/search-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyfavouriteComponent } from './myfavourite/myfavourite.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CardpageComponent } from './cardpage/cardpage.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { MysignupComponent } from './mysignup/mysignup.component';
import { FooterNewComponent } from './footer-new/footer-new.component';
import { TableComponent } from './table/table.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'home', component: HomeComponent},
  { path: 'favourite/:pageId',      component: MyfavouriteComponent },
  {path: 'favourite', component: MyfavouriteComponent},
  {path: 'search-list', component: SearchListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'mainpage', component: MainpageComponent},
  {path: 'cardpage', component: CardpageComponent},
  {path: 'mylogin', component: MyloginComponent},
  {path: 'mysignup', component:MysignupComponent},
  {path:'table',component:TableComponent},
  {path:'history', component:SearchHistoryComponent},
  {path:'addmovie', component:AddMovieComponent},
  {path: '**', component: HomeComponent},
  {path:'fN', component:FooterNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
