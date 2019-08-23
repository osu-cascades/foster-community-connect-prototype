import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';


@Component({ templateUrl: 'give.component.html' })
export class GiveComponent {
    logText(){
        console.log("clicked");
        alert("clicked");
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