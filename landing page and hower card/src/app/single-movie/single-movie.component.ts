import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  @Input() singleMovie: Movie[];

  constructor(private route: ActivatedRoute, private router: Router,
    private userService: MovieServiceService) {
  }

  ngOnInit() {
  }

}
