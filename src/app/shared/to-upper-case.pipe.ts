import { Pipe, PipeTransform } from '@angular/core';
import { ToolString } from './helpers/toolString';

@Pipe({
  name: 'toUpperCase'
})
export class ToUpperCasePipe extends ToolString implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.toUpperCase(value);
  }

}
