import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'asnThreePipe'
})
export class AsnThreePipePipe implements PipeTransform {

  transform(list: Content[], type: string): Content[] {
    return list.filter(t => t.type.includes(type));
  }
}
