import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(ch:string) {
    let result:string="";
    for (let i = ch.length-1; i >= 0; i--) {
      result+=ch[i];
    }
    // for (let i = 0; i < ch.length; i++) {
    //   result=ch[i]+result;
    // }
    return result;
  }
}