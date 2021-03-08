import { Component, OnInit } from '@angular/core';
import { Ticket } from '@shared/models/ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  currentOption = 0;
  currentPhase = 0;
  constructor() { }

  ticketOptions: Ticket[] = [
    {
      name: 'Normal ticket',
      price: 39.99,
      currency: '$',
      features: [
        'All expansions',
        'Strong bounds',
        'Natural',
        'Colorful',
        'For many sizes'
      ],
      id: 1,
      image: 'assets/images/tickets/ticketNormal.png',
      about: '',
    },
    {
      name: 'Family ticket',
      price: 39.99,
      currency: '$',
      features: [
        'All expansions',
        'Strong bounds',
        'Natural',
        'Colorful',
        'For many sizes'
      ],
      id: 2,
      image: 'assets/images/tickets/ticketFamily.png',
      about: '',
    },
    {
      name: 'Solo experience ticket',
      price: 39.99,
      currency: '$',
      features: [
        'All expansions',
        'Strong bounds',
        'Natural',
        'Colorful',
        'For many sizes'
      ],
      id: 3,
      image: 'assets/images/tickets/ticketSolo.png',
      about: '',
    },
    {
      name: 'Vip ticket',
      price: 39.99,
      currency: '$',
      features: [
        'All expansions',
        'Strong bounds',
        'Natural',
        'Colorful',
        'For many sizes'
      ],
      id: 4,
      image: 'assets/images/tickets/ticketVip.png',
      about: '',
    },

  ];

  ngOnInit(): void {
  }

  chooseOption(number: number): void {
    if(this.currentOption == number){
      this.currentOption = -1;
    } else {
      this.currentOption = number;
    }
  }

  prevPhase(): void{
    if(this.currentPhase > 0){
      this.currentPhase -= 1;
    }
  } 

  nextPhase(): void{
    if(this.currentPhase < 2){
      this.currentPhase += 1;
    }
  }

}
