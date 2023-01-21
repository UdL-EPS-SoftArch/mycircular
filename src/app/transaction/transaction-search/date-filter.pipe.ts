import {Pipe, PipeTransform} from "@angular/core";
import {Transaction} from "../transaction";

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform{
  transform(list: Transaction[],date:string): Transaction[] {
    console.log("hola llego aqui!" + list.length);
    if(!date){
      return list;
    }
    let nuevaLista: Transaction[] = [];
    let dateFilter;
    let newCreationdate;
    for(let i = 0; i<list.length;i++){
      dateFilter = new Date(date);
      newCreationdate = new Date(list[i].creationDate);
      if(newCreationdate.getMonth()===dateFilter.getMonth() && newCreationdate.getFullYear() === dateFilter.getFullYear()){
        nuevaLista.push(list[i]);
      }
    }
    // @ts-ignore
    return nuevaLista;
  }
}
