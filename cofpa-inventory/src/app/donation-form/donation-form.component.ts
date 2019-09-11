import { Component, OnInit } from '@angular/core';
import { DonationForm} from '../donation-form';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }
  
  model = new DonationForm('','','','','');

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.messageService.sendMessage("scooby");
  };

  get diagnostic() {return JSON.stringify(this.model);}

  newDonationForm() {
    this.model = new DonationForm('', '', '','','');
  }

}
