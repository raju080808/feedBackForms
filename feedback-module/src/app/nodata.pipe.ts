import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nodata'
})
export class NodataPipe implements PipeTransform {
  transform(value: unknown): unknown {
    if(value == "" || value == null|| value == undefined){
      return "NA";
    }
    else{
      return value;
    }   
  }
}
