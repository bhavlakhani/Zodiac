import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  movie:Movie= new Movie();
  movies:Movie[];
  constructor(private movieService:MovieServiceService) { }

  ngOnInit() {

  }
  searchMovies(name:string){
    this.movieService.getMovies(name).subscribe(data=>{
      this.movies=data;
    });
  };



}
