import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from '@shared/models/ticket.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  @ViewChild(StripeCardComponent) card!: StripeCardComponent;

  currentOption = -1;
  currentPhase = 2;
  ticketType = -1;

  options = {
    name: '',
    email: '',
    phone: ''
  };

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

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  name: string = '';

  constructor( private stripeService: StripeService) { }

  ngOnInit(): void {
  }

  createToken(): void {



    this.stripeService
      .createToken(this.card.element, { name: this.name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
    }

  chooseOption(number: number): void {
      if(this.currentOption == number){
        this.currentOption = -1;
      } else {
        this.currentOption = number;
      }
    }

  chooseTicketType(number: number){
      if (this.ticketType == number){
        this.ticketType = -1;
      } else {
        this.ticketType = number;
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
