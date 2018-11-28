import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

title: String;
myClass: String;
itemSize = false;
divMovieList = true;
movieL: Movie[];
  constructor(private service: MovieServiceService, private router: Router) {
    if (!localStorage.getItem('userId')) {
      this.router.navigate(['/login']);
     }
   }

  ngOnInit() {
  }



movieList() {
  this.itemSize = false;
  this.service.requestMovieList(this.title).subscribe(data => {
      this.movieL = data;
  });


this.myClass = 'scrolling-wrapper2';


}

getYearOfMovie(movieReleaseDate) {
  return movieReleaseDate.substring(0, 4);
}

myFunction()  {
  if (this.title.length > 0) {
   this.movieList();
    this.divMovieList = false;
  } else {
    this.divMovieList = true;
  }
}

inSearchBox(moviename) {
  this.title = moviename;
  this.divMovieList = true;


}

setItemSize() {
  this.itemSize = true;
}

favList() {
  this.router.navigate(['/favourite']);
}

shortDesc(desc) {
  return desc.substring(0, 120) + '...';
}


addToFavourite(movie) {
  this.service.addfavMovie(movie).subscribe(data => {
    console.log('Success');
  });
}

logout() {
  localStorage.removeItem('userId');
  this.router.navigate(['/login']);
}

}
