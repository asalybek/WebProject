import {Component, OnInit} from '@angular/core';
import {DashboardService} from './services/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kitapWebsite';
  logged;
  constructor(private service: DashboardService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.service.logged = true;
      console.log('APP', this.service.logged);
    }
    this.logged = this.service.logged;
    console.log('APP OUTSIDE', this.service.logged);
  }
  logout() {
    localStorage.clear();
    this.logged = false;
  }
}
