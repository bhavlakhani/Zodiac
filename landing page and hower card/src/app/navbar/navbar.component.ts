import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '../movie';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('a[href="#search"]').on('click', function(event) {
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
      });
      $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className === 'close' || event.keyCode == 27) {
          $(this).removeClass('open');
        }
      });
    });


  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    return true;
}
closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    return true;
}




}
