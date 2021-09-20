import { AccountService } from './../account.service';
import { LoggingService } from './../logging.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  // providers: [LoggingService]
  // providers: [LoggingService, AccountService]
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingService, private accountService:AccountService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => {
        alert('New Status: ' + status)
      }
    );
   }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.loggingService.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName, accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
  }

}
