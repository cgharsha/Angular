import { AccountService } from './../account.service';
import { LoggingService } from './../logging.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  // providers: [LoggingService]
  // providers: [LoggingService, AccountService]
})
export class AccountComponent implements OnInit {

  constructor(private loggingService:LoggingService, private accountService:AccountService) { }

  ngOnInit(): void {
  }

  // @Input() account?: {name: string, status: string};
  @Input() account?:any;
  // @Input() id: number=0;
  @Input() id?: any;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id, status)
    this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
    this.accountService.statusUpdated.emit(status);
  }

}
