import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public logged = false;

  email = '';
  password = '';
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  login() {
    this.service.login(this.email, this.password)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.logged = true;

        this.email = '';
        this.password = '';
      });
  }

  logout() {
    localStorage.clear();
    this.logged = false;
  }
}
