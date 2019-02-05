import {trigger, stagger, animate, style, query, transition} from '@angular/animations';

const containerClass = '.page_container';

export const ContainerAnimation = trigger('containerAnimation', [
  transition(':enter', [
    query(containerClass, style({opacity: 0}), {optional: true}),
    query(containerClass, stagger(300, [
      style({transform: 'translateY(100px)'}),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ]), {optional: true}),
  ]),
  /**
  transition(':leave', [
    query(containerClass, stagger(300, [
      style({transform: 'translateY(0px)', opacity: 1}),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ])),
  ])
   */
]);
