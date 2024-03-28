import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  counter: number = 0;
  roundPassed: number = 0; // Добавляем свойство для хранения количества пройденных раундов

  constructor() { }
}
