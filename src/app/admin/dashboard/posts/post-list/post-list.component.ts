import { Component, OnDestroy, OnInit } from '@angular/core';
import { postsServise } from '../posts.service';
import { Post } from '../post.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

posts: Post[]=[];
private postSub : Subscription;
constructor(public postServise: postsServise){}

ngOnInit(){
  this.posts = this.postServise.getPost();
  this.postSub = this.postServise.getUpdateListener().subscribe((posts: Post[])=>
  {
    this.posts = posts;
  }
  );
}
ngOnDestroy(){
    this.postSub.unsubscribe()
}

}

