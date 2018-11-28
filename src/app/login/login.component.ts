import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CredentialsBean } from '../credentialsbean';
import { MovieServiceService } from '../movie-service.service';
import { trigger, transition, style, group, query, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideInOut', [
      transition('* => *, :enter', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        query(':enter', style({ transform: 'translateX(-100vw)' }), { optional: true }),
        query(':leave', style({ transform: 'translateX(0vw)' }), { optional: true }),

        group([
          query(':leave', [
            animate('500ms ease-in-out', style({
              transform: 'translateX(100vw)'
            }))
          ], { optional: true }),
          query(':enter', [
            animate('500ms ease-in-out', style({
              transform: 'translateX(0)'
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  credBean: CredentialsBean = new CredentialsBean();
  credentialsBean: CredentialsBean = new CredentialsBean();
  loginMessage: String;
  constructor(private router: Router, private userService: MovieServiceService) {
    if (localStorage.getItem('userId')) {
      this.router.navigate(['/welcome']);
     }
  }

  ngOnInit() {

  }

  login(): void {
    this.userService.UserLogin(this.credentialsBean)
    .subscribe(data => { this.credBean = data;
        if (this.credBean.userID === this.credentialsBean.userID) {
          const str = this.credentialsBean.userID + '';
          localStorage.setItem('userId', str);
          this.router.navigate(['/welcome']);
        } else {
       }
      });
      this.loginMessage = 'Use correct userid and password';
    }
}

