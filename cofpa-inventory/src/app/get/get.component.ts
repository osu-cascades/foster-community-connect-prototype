import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MessageService } from '../services/message.service';


@Component({ templateUrl: 'get.component.html' })
export class GetComponent {
    logText(body){
        console.log("clicked");
        alert("clicked");
    }
}
