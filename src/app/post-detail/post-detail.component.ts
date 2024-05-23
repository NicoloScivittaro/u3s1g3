import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { iPost } from '../model/ipost';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
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
