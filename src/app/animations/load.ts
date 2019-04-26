import { transition, animate, state, style, trigger } from '@angular/animations';

export const load = trigger('load', [
    state('hidden', style({
        opacity: 0,
        transform: 'translateY(10px)'
    })),
    state('shown', style({
        opacity: 1,
        transform: 'translateY(0)'
    })),
    transition('hidden => shown', [
        animate('500ms')
    ])
]);