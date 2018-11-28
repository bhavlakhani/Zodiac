import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent implements OnInit {

  data = ["1","2","3","4","5","6","7","8"];
  constructor() { }

  ngOnInit() {
  }
 
}
