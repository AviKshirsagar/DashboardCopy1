import { users } from './../../classes/users';
import { api } from './../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { posts } from 'src/app/classes/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _api:api) { }
  listUser : users[];
  listposts : posts[];
  ngOnInit() {
    this._api.getUsers().subscribe(
      data => {
        this.listUser = data;
      }
    );

    // Getting data by parameter
    // this._api.getCommentbyparameter().subscribe(
    //   data = {
    //     this.listposts = data;
    //   }
    // );
  }
}
