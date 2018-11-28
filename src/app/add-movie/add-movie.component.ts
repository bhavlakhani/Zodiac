import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie = new Movie();

  constructor(private service: MovieServiceService) {
    this.movie.movieName = "A";
    this.movie.moviePosterUrl = "A";
    this.movie.movieReleaseDate = "2018-11-28";
    this.movie.movieDescription = "A";
    this.movie.movieVideoUrl = "A";
    this.movie.movieCategory = "A";
    this.movie.movieLanguage = "A";
    this.movie.movieAgeLimit = 20;
    this.saveData();
   }

  ngOnInit() {
  }
  saveData(){
    this.service.saveMovie(this.movie)
    .subscribe(data => {
        alert("Added Success");
    });
  }
}
