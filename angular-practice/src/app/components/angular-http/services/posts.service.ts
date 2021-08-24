import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from './../model/post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  private postDataURL = environment.backEndURL + 'posts.json';
  private getDataURL = environment.backEndURL + 'posts.json';
  error = new Subject<string>();

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      // .post<{ name: string }>(
      //   'https://ng-course-4f7ff-default-rtdb.firebaseio.com/posts.json',
      //   postData
      // )
      .post<{ name: string }>(this.postDataURL, postData, {
        observe: 'response',
      })
      .subscribe(
        (responseData) => {
          // If Component doesn't care about return data, if is advisable to keep subscribe in service
          console.log(responseData);
          // this.onFetchPosts();
        },
        (error) => {
          console.log(error);
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        // ('https://ng-course-4f7ff-default-rtdb.firebaseio.com/posts.json')
        this.getDataURL,
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          // params: new HttpParams().set('print', 'pretty')
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(
        map((responseData: any) => {
          // map((responseData: { [key: string]: Post }) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            // console.log(responseData[key]);
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          // Send to own server
          // Using Subject to send error message
          // this.error.next(errorRes.message);
          return throwError(errorRes);
        })
      );
    // .subscribe((posts) => {
    //   // console.log(posts);
    //   // this.isFecthing = false;
    //   // this.loadedPosts = posts;
    // });
  }

  deletePosts() {
    return this.http
      .delete(environment.backEndURL + 'posts.json', {
        observe: 'events',
        responseType: 'text' // 'json' 'blob'
      })
      .pipe(
        tap((event) => {
          console.log(event);
          if(event.type === HttpEventType.Sent){
            console.log("Sent Data");
          }
          if(event.type === HttpEventType.Response){
            console.log(event.body);
          }
        })
      );
  }
}
