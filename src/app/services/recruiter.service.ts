import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  check:EventEmitter<boolean> =  new EventEmitter();
  constructor() { }


}
