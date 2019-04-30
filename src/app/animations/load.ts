import { transition, animate, state, style, trigger } from '@angular/animations';

export const load = trigger('load', [
    state('hidden', style({
        opacity: 0
    })),
    state('shown', style({
        opacity: 1
    })),
    transition('hidden => shown', [
        animate('500ms')
    ])
]);