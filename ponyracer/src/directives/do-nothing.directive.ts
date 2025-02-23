import { Directive } from "@angular/core";

@Directive({
    selector: '[doNothing]',
    standalone: true
})

export class DoNothingDirective{
    constructor(){
        console.log('DoNothingDirective created');
    }
}
