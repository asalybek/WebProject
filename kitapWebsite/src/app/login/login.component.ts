import {Component} from '@angular/core';
import {DashboardService} from '../services/dashboard.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  constructor(private service: DashboardService, private location: Location) { }

  login() {
    this.service.login(this.username, this.password)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        console.log('LOGIN', this.service.logged);
        this.service.logged = true;
        console.log('LOGIN', this.service.logged);
        this.username = '';
        this.password = '';
      });
  }

}
