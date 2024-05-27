import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { iPost } from '../model/ipost';

@Component({
  selector: 'app-post-detail-form',
  template: `
    <div>
      <ng-content></ng-content>
      <form>
        <div>
          <label for="comment">Comment:</label>
          <textarea id="comment" name="comment"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
  styles: [`
    form {
      margin-top: 20px;
    }
  `]
})
export class PostDetailComponent implements OnInit {
  post: iPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private postSvc: PostService
  ) {}

  ngOnInit() {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.post = this.postSvc.getById(postId);
  }
}
