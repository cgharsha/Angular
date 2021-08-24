import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from './../../services/servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  // server?: { id: number, name: string, status: string };
  // server:any= {id: 0, name: 'Test', status: 'Offline'};
  server:any;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(
    //   (data: Data) => {
    //     this.server = data['server'];
    //   }
    // );
    const id = +this.activatedRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.activatedRoute.params.subscribe((params: Params) => {
      let paramsId = params['id'];
      // console.log(this.serversService.getServer(+paramsId));
      this.server = this.serversService.getServer(+params['id']);
    });
    console.log(this.server);
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute, queryParamsHandling: 'preserve'});
    // queryParamsHandling: 'merge'
  }
}
