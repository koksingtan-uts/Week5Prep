import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[taskId]' })
export class TaskIdDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    @Input() taskidnumber: number;
}
