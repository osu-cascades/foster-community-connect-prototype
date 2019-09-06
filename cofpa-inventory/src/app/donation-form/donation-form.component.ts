import { Component, OnInit } from '@angular/core';
import { DonationForm} from '../donation-form';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  model = new DonationForm('','','','','');

  submitted = false;

  onSubmit() {this.submitted = true};

  get diagnostic() {return JSON.stringify(this.model);}

}
