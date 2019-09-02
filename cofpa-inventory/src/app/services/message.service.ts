import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {NgModule} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  async sendMessage(body) {
    console.log({body});
    return this.http.get('http://localhost:3000/ff792xyp872').subscribe()
  }
}
