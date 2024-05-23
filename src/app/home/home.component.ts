import { Component, OnInit } from '@angular/core';
import { iPost } from '../model/ipost';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  postsArr: iPost[] = [];
  firstPost!: iPost;
  randomPosts: iPost[] = [];

  constructor(private postSvc: PostService) {}

  async ngOnInit() {
    this.postsArr = await this.postSvc.getPosts();

    let firstPost = this.getFirstPost();

    if (firstPost) {
      this.firstPost = firstPost;
    }

    this.randomPosts = this.getRandomPosts();
  }

  getFirstPost(): iPost | undefined {
    return this.postsArr.length > 0 ? this.postsArr[0] : undefined;
  }

  getRandomPosts(): iPost[] {
    const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }
}
