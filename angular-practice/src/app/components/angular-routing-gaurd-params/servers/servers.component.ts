import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServersService } from './../services/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['/angular-routing-gaurd-params/servers'], {
    //   relativeTo: this.activatedroute,
    // });

    console.log(this.activatedroute)
  }
}
