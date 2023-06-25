import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class api {
    constructor(private httpClient:HttpClient) { }
  getUsers():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
    // return this.httpClient.get("http://localhost:5000/user/getall")
  }
//   getCommentbyparameter():Observable<any>{
//     let param1 = new HttpParams().set('userId', '1');
//     return this.httpClient.get("https://jsonplaceholder.typicode.com/posts", {params:param1});
//   }
}
