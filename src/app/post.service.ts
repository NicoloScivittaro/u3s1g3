import { Injectable } from '@angular/core';
import { iPost } from './model/ipost';
import { IJsonContent } from './model/i-json-content';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsArr: iPost[] = [];

  constructor() {
    this.loadPosts();
  }

  private async loadPosts() {
    const response = await fetch('../../assets/db.json');
    const posts = <IJsonContent>await response.json();
    this.postsArr = posts.posts;
  }

  async getPosts(): Promise<iPost[]> {
    if (this.postsArr.length === 0) {
      await this.loadPosts();
    }
    return this.postsArr;
  }

  getAll(): iPost[] {
    return this.postsArr;
  }

  getById(id: number): iPost | undefined {
    return this.postsArr.find(p => p.id === id);
  }
}
