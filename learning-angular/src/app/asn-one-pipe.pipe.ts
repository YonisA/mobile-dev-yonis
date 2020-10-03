import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asnOnePipe'
})
export class AsnOnePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
