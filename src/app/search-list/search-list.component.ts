import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  movie3: Movie = new Movie();
  movies: Movie[];
  constructor(private movieService: MovieServiceService) { }

  ngOnInit() {
    }
  searchMovies(name: string) {
    this.movieService.getMovies(name)
    .subscribe(data => {
      this.movies = data;
    });
  }

  addToFav(m: Movie) {
    this.movieService.addfavMovie(m).subscribe(data => {
      });
  }
}
