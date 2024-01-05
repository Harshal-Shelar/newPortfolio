import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  public change: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  public setdata(value:any) {
    this.change.emit(value);
  }
}