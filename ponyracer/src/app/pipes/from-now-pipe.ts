import { Pipe, PipeTransform } from "@angular/core";
import { formatDistanceToNowStrict, parseISO } from 'date-fns';

@Pipe({
    name: 'fromNow',
    standalone: true,
    pure: true
})
export class FromNowPipe implements PipeTransform{
    transform(value: string, unit?: 'month' | 'year' ) : string {
        const date = parseISO(value);
        return formatDistanceToNowStrict(date, { unit, addSuffix : true});
    }
}