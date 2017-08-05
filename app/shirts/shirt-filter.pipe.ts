import { PipeTransform, Pipe } from '@angular/core';

import { IShirt } from './shirt';

@Pipe({
    name: 'shirtFilter'
})
export class ShirtFilterPipe implements PipeTransform {

    transform(value: IShirt[], filterBy: string): IShirt[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((shirt: IShirt) =>
            shirt.colour.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
