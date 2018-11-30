import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Movie} from './movie';
import { Favourites } from './favourites';
import { Hist } from './history';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  fav = new Favourites();
  his  = new Hist();
  constructor(private http: HttpClient) { }
  private baseUrl1 = 'http://localhost:8765';

  public getMovies(title) {
    return this.http.get<Movie[]>(this.baseUrl1 + '/search-movies/searches/title/' + title);
    }
  
    public getFavList() {
      return this.http.get<Favourites[]>(this.baseUrl1 + '/favourite-movies/favourite');
    }
  
    public addfavMovie(movie) {
      this.fav.movieId = movie.movieId;
      this.fav.userId = '1';
      this.fav.movieName = movie.movieName;
      this.fav.moviePosterUrl = movie.moviePosterUrl;
      this.fav.movieReleaseDate = movie.movieReleaseDate;
      return this.http.post<Favourites>(this.baseUrl1 + '/favourite-movies/favAdd/', this.fav);
    }
    public requestMovieList(title) {
    return this.http.get<Movie[]>(this.baseUrl1 + '/search-movies/searches/title/' + title);
  }
  
  public requestFavMovieList() {
    return this.http.get<Favourites[]>(this.baseUrl1 + '/favourite-movies/favourite');
  }
  
  public requestFavouriteDelete(favr) {
    return this.http.put<number>(this.baseUrl1 + '/favourite-movies/favDelete/' + favr.movieId, favr.movieId);
  }

  public addSearch(movie){
    this.his.userId = '1';
    this.his.movieId = movie.movieId;
    console.log("Message" + movie);
    return this.http.post<Hist>(this.baseUrl1 +'/search-movies/addSearch',this.his);
  }
  public getMySearchHistoryOfToday(){
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth()  + 1; 
    let qry = d.getFullYear() + '-' +month+ '-' + date;
    return this.http.get<Hist[]>(this.baseUrl1 +'/search-movies/viewByDateAndUserId/' +qry +'/'+'1');
  }

  public getMySearchHistory(){
    return this.http.get<Hist[]>(this.baseUrl1 +'/search-movies/viewByUserId/' +'1');
  }

  public getMovieById(movieId){
    return this.http.get<Movie>(this.baseUrl1 +'/administrator/viewMovie/' + movieId);
  }

  public clearOneHistory(searchId){
    return this.http.post<number>(this.baseUrl1 +'/search-movies/deleteSearch/' + searchId,searchId);
  }




}
