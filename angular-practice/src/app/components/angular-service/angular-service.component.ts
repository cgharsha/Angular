import { AccountService } from './account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-service',
  templateUrl: './angular-service.component.html',
  styleUrls: ['./angular-service.component.scss'],
  // providers:[AccountService]
})
export class AngularServiceComponent implements OnInit {

  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  constructor(private accountService:AccountService) { }

  accounts: {name: string, status: string}[]=[];

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    // this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

}
