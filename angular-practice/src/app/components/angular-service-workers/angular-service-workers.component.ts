import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Post } from './post.model';

@Component({
  selector: 'app-angular-service-workers',
  templateUrl: './angular-service-workers.component.html',
  styleUrls: ['./angular-service-workers.component.scss']
})
export class AngularServiceWorkersComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }

}
