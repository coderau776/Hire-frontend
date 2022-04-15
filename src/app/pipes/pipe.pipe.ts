import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: any): any {
    return value.filteredData.filter((data)=>(data.slotId===34));
  }

}
