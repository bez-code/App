import { Injectable } from '@angular/core';
import { Post } from './post.module';
import { Subject } from 'rxjs';


@Injectable ({providedIn:'root'})
export class postsServise {
  private posts: Post[]= [];
  private postUpdate = new Subject<Post[]>();

  getUpdateListener(){
    return this.postUpdate.asObservable();
  }

  addPost (title: string, content: string, dateTime: Date) {
    const post :Post = { title: title , content: content, dateTime: new Date() }
    this.posts.push(post);
    this.postUpdate.next([...this.posts])
  }
  getPost(){
    return [...this.posts]
  }
}
