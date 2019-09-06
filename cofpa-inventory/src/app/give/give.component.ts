import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { MessageService } from '../services/message.service';

@Component({ templateUrl: 'give.component.html' })
export class GiveComponent {
    constructor(public messageService: MessageService) {}
    logText(){
        console.log("clicked");
        this.messageService.sendMessage("scooby");
    }
}

// Reactive form w3 example
// @Component({
//     selector: 'app-reactive-favorite-color',
//     template: `
//       Favorite Color: <input type="text" [formControl]="favoriteColorControl">
//     `
//   })
//   export class FavoriteColorComponent {
//     favoriteColorControl = new FormControl('');
//   }