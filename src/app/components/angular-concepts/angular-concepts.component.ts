import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-angular-concepts',
  templateUrl: './angular-concepts.component.html',
  styleUrls: ['./angular-concepts.component.scss']
})
export class AngularConceptsComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { 
    this.messageService.getMessage().subscribe(message => {
      console.log("Message Recieved from Header Component")
    })
  }

  ngOnInit(): void {
  }

}
