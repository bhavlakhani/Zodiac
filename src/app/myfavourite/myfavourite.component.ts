import { Component, OnInit } from '@angular/core';
import { FavouriteMovie } from './FavouriteMovie';
import { MovieServiceService } from '../movie-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-myfavourite',
  templateUrl: './myfavourite.component.html',
  styleUrls: ['./myfavourite.component.css']
})
export class MyfavouriteComponent implements OnInit {

  myfavMovieList: FavouriteMovie[];
  favMovieList: FavouriteMovie[];
  l: FavouriteMovie;
  pageId: number;
  prevId: number;
  nextId: number;
  link: String;
  constructor(private service: MovieServiceService, private route: ActivatedRoute, private router: Router) {
   this.route.params.subscribe( params => this.pageId = params['pageId']);
   if (!localStorage.getItem('userId')) {
    this.router.navigate(['/login']);
   }
   if (!this.pageId) {
     router.navigate(['favourite/1']);
   }
   console.log(this.pageId);
   if (this.pageId <= 0) {
     location.replace('favourite/1');
   }
   this.updatePrevNext();
}

  ngOnInit() {
    this.service.requestFavMovieList().subscribe(data => {
        this.myfavMovieList = data;
        this.showCards();
    });
  }

  deleteFavourite(movieid) {
    return this.service.requestFavouriteDelete(movieid).subscribe(data => {
      return this.service.requestFavMovieList().subscribe(data1 => {
        this.favMovieList = data1;
    });
  });
}

moveTo(move) {
 if (move === 'p') {
  if (this.isMovePossibe(this.prevId)) {
    this.pageId = this.prevId;
    this.link = 'favourite/' + this.prevId;
    this.router.navigate([this.link]);
  }
 }
 if (move === 'n') {
  if (this.isMovePossibe(this.nextId)) {
    this.pageId = this.nextId;
    this.link = 'favourite/' + this.nextId;
    this.router.navigate([this.link]);
  }
 }
 this.updatePrevNext();
}
updatePrevNext() {

  this.prevId = this.pageId - 1;
  this.nextId = this.prevId + 2;
  this.showCards();
}
showCards() {
  if (this.myfavMovieList) {
    const flag = this.isMovePossibe(this.pageId);
    if (flag ===  false) {
      location.replace('favourite/1');
    }
    const x = this.pageId * 4;
    this.favMovieList = this.myfavMovieList.slice(x - 4, x);
    console.log(x);
  }
}
isMovePossibe(pageId) {
let len = this.myfavMovieList.length;
if (len % 2 === 0) {
    len = len / 4;
} else {
  len = len / 4;
  len = len + 1;
}
if (pageId <= 0 ) {
return false;
}
if (pageId > len) {
return false;
}
return true;
}
logout() {
  localStorage.removeItem('userId');
  this.router.navigate(['/login']);
}
}
