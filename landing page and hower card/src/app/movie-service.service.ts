import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { FavouriteMovie } from './myfavourite/FavouriteMovie';
import { ProfileBean } from './profilebean';
import { CredentialsBean } from './credentialsbean';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private baseUrl1 = 'http://localhost:8765';

  constructor(private http: HttpClient) { }

  public getMovies(title) {
  return this.http.get<Movie[]>(this.baseUrl1 + '/search-movies/searchs/' + title);
  }

  public getFavList() {
    return this.http.get<Movie[]>(this.baseUrl1 + '/favourite-movies/favourite');
  }

  public addfavMovie(movie) {
    return this.http.post(this.baseUrl1 + '/favourite-movies/favAdd/' + movie.movieId, movie.movieId);
  }
  public requestMovieList(title) {
  return this.http.get<Movie[]>(this.baseUrl1 + '/search-movies/searchs/' + title);
}

public requestFavMovieList() {
  return this.http.get<FavouriteMovie[]>(this.baseUrl1 + '/favourite-movies/favourite');
}

public requestFavouriteDelete(movieId) {
  return this.http.put<number>(this.baseUrl1 + '/favourite-movies/favDelete/' + movieId, movieId);
}

public UserLogin(credentialsBean) {
  return this.http.post<CredentialsBean>(this.baseUrl1 + '/login-signup-movies/login', credentialsBean);
 }
 public registration(profileBean) {
   return this.http.post<ProfileBean>(this.baseUrl1 + '/login-signup-movies/register', profileBean);
 }
 public UserLogout(userID) {
  return this.http.get(this.baseUrl1 + '/login-signup-movies' + userID);
 }

 public forgotPassword(credentialsBean) {
  return this.http.post<CredentialsBean>(this.baseUrl1 + '/login-signup-movies/forgotPassword', credentialsBean);
 }
}
