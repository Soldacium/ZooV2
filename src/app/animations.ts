import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('blog => post', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '500%',
          'background-color':'#ccc'
        })
      ]),
      query(':enter', [
        style({ left: '-100%', 'z-index': 20, 'border-left': '3px solid #000' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('1700ms ease', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('post => blog', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',

          })
        ]),
        query(':enter', [
          style({ right: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('500ms ease-out', style({ right: '100%','z-index': 20 }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ right: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
    ])
  ]);