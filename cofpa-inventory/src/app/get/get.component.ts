import { Component } from '@angular/core';

@Component({ templateUrl: 'get.component.html' })
export class GetComponent {
    logText(){
        console.log("clicked");
        alert("clicked");
    }
}