
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onLoadServers() {
    this.router.navigate(['angular-routing-gaurd-params/servers']);
  }

  onLoadServer(id: number) {
    this.router.navigate(['angular-routing-gaurd-params/servers', id, 'edit'], {
      queryParams: { allowEdit: '1' }, fragment: 'loading'
    });
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }
}
