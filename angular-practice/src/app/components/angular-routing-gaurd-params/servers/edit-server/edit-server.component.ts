import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from './../../services/servers.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss'],
}) /*, CanComponentDeactivate */
export class EditServerComponent implements OnInit {
  // server?: { id: number, name: string, status: string };
  server: any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.queryParams);
    console.log(this.activatedRoute.snapshot.fragment);
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.activatedRoute.fragment.subscribe();
    const id = +this.activatedRoute.snapshot.params['id'];
    // Subscribe route params to update the id if params change
    this.server = this.serversService.getServer(id);
    // console.log(this.server)
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    // this.router.navigate(['../', { relativeTo: this.activatedRoute }]);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm('Do you want to to discard the changes');
    } else {
      return true;
    }
  }
}
