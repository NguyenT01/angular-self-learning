import { Directive } from "@angular/core";

@Directive({
    selector: '[loggable]',
    inputs: ['text: logText'],
    standalone: true
})

export class SimpleTextWithSetterDirective{
    set text(value: string){
        console.log(value)
    }    
}