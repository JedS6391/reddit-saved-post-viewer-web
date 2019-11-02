import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncatePostTitle'
})
export class TruncatePostTitlePipe implements PipeTransform {
    transform(value: string, limit = 100) {
        return value.length > limit ?
            `${value.substr(0, limit)}...` :
            value;
    }
}
