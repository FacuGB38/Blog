import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/Rx'


@Injectable()
export class PostsService {

  // Endpoints
  baseOwnPostsURL = 'https://hehe-519c9.firebaseio.com/posts';

  constructor(
    private http: Http

  ) { }

  getOwnPosts(uid: string) {

    const url = `${this.baseOwnPostsURL}/${ uid }.json`;

    return this.http.get( url )
      .map(res => res.json())

  }

}
