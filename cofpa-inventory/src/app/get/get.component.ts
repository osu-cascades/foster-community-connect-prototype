import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({ templateUrl: 'get.component.html' })
export class GetComponent {
    logText(body){
        console.log("clicked");
        alert("clicked");
         return this.http.get('http://localhost:3000' + '/ff792xyp872', body);
    }
    readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/'
    posts: any;
    constructor(private http: HttpClient) {}
    getPosts() {
        alert("posts clicked");
        this.posts = this.http.get(this.ROOT_URL + '/posts')
    }
}