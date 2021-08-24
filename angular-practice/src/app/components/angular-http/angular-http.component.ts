import { PostsService } from './services/posts.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './model/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-angular-http',
  templateUrl: './angular-http.component.html',
  styleUrls: ['./angular-http.component.scss'],
})
export class AngularHttpComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFecthing = false;
  error = '';
  private errorSub: Subscription = new Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe((errorMessage) => {
      this.error = errorMessage;
    });
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // console.log(postData);
    // this.http
    //   .post<{name: string}>(
    //     'https://ng-course-4f7ff-default-rtdb.firebaseio.com/posts.json',
    //     postData
    //   )
    //   .subscribe((responseData) => {
    //     console.log(responseData);
    //     this.onFetchPosts();
    //   });
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    // this.fetchPosts();
    this.isFecthing = true;
    this.postsService.fetchPosts().subscribe(
      (posts) => {
        // console.log(posts);
        this.isFecthing = false;
        this.loadedPosts = posts;
      }, 
      // Use catch error and throw error instead of below from service
      (error) => {
        this.isFecthing = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    // this.http
    //   .get<{ [key: string]: Post}>('https://ng-course-4f7ff-default-rtdb.firebaseio.com/posts.json')
    //   .pipe(
    //     map((responseData: any) => {
    //     // map((responseData: { [key: string]: Post }) => {
    //       const postsArray: Post[] = [];
    //       for (const key in responseData) {
    //         // console.log(responseData[key]);
    //         if (responseData.hasOwnProperty(key)) {
    //           postsArray.push({ ...responseData[key], id: key });
    //         }
    //       }
    //       return postsArray;
    //     })
    //   )
    //   .subscribe((posts) => {
    //     // console.log(posts);
    //     this.isFecthing = false;
    //     this.loadedPosts = posts;
    //   });
  }

  onHandleError(){
    this.error = '';
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }
}
