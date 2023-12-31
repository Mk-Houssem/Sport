import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch: string) {
    let result:string="";
    let vowels=["a","e","y","u","i","o"];
    for (let i = 0; i < ch.length; i++) {
      let inter=ch[i];
      for (let j = 0; j < vowels.length; j++) {
        if (ch[i].toLowerCase()==vowels[j]) {
          inter="*";
          break;
        }
      }
      result=result+inter;
    }
    return result;
  }

}
