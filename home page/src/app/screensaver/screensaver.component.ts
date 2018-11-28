import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ParticlesModule } from 'angular-particle';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.css']
})
export class ScreensaverComponent implements OnInit {

    myStyle: object = {};
    myParams: object = {};
    width:  100;
    height:  100;

  constructor() {
    $('.flip').hover(function() {
        $(this).find('.card').toggleClass('flipped');

 });
  }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
  this.myParams = {
    particles: {
        number: {
            value: 200,
        },
        color: {
            value: '#ff0000'
        },
        shape: {
            type: 'triangle',
        },
}
};
}
}
