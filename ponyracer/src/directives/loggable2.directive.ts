import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[loggable2]',
    standalone: true
})

export class Loggable2Directive{
    @Input('logText2')
    set text(value: string){
        console.log(value)
    }

}