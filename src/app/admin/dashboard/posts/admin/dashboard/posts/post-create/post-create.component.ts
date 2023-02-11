import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { postsServise } from '../../../../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  constructor (public postService: postsServise) {}
  onPostAdded (form: NgForm){

    if (form.invalid){
      return
    }
    this.postService.addPost(form.value.title, form.value.content, form.value.dateTime);
    form.resetForm ();
  }

}
