import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userDetails = { name: '', image: '' };
  activePath:any;

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private messageService: MessageService,
    private pathLocation: Location
  ) { 
    router.events.subscribe(() => {
      this.activePath = pathLocation.path();
    });
  }

  ngOnInit(): void {
    this.getuserDetails();
  }

  getuserDetails() {
    this.userDetails = {
      name: 'username',
      image: 'assets/images/local_user_logo.svg',
    };
    // if (isDevMode()) {
    //    // console.log('Dev mode user call');
    //     this.userDetails={'name':"username", 'image':"assets/images/local_user_logo.svg"};
    //   } else {
    //     //console.log("prod user call");
    //     this.userProfileService.fetchUserData().subscribe(
    //       async response => {
    //         this.userName = await response.Name;
    //         this.profileImageURL = await window.location.origin + '/Home/ProfilePicService?eid=' + response.EID;
    //         this.userDetails={'name':this.userName, 'image':this.profileImageURL};
    //       },
    //       error => {
    //         this.error = error.message;
    //       }
    //     );
    //   }
  }

  reset(){
    // send message to subscribers via observable subject
    console.log("send message to subscribers via observable subject");
    this.messageService.reset();
  }

  get dark() {
    return this.themeService.theme === 'dark';
  }

  set dark(enabled: boolean) {
    this.themeService.theme = enabled ? 'dark' : '';
  }

}
