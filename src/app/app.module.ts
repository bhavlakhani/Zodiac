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

import { SingleMovieComponent } from './single-movie/single-movie.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyfavouriteComponent } from './myfavourite/myfavourite.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatAutocompleteModule, 
  MatFormFieldModule, MatSlideToggleModule, MatInputModule, 
  MatToolbarModule, MatIconModule, MatMenuTrigger, MatMenuModule, MatCardModule, MatSpinner, MatProgressSpinner, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatTableDataSource, MatTableModule, MatPaginatorModule} from '@angular/material';
import { CardpageComponent } from './cardpage/cardpage.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { MysignupComponent } from './mysignup/mysignup.component';
import { FooterNewComponent } from './footer-new/footer-new.component';
import { TableComponent } from './table/table.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AddMovieComponent } from './add-movie/add-movie.component';


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
    HomeComponent,
    MainpageComponent,
    CardpageComponent,
    MyloginComponent,
    MysignupComponent,
    FooterNewComponent,
    TableComponent,
    SearchHistoryComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,

    ],
  providers: [AuthGuard, MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
