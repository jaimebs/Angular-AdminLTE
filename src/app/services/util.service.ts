import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() {}

  deletaRegistroArray(item, array) {
    let index = array.indexOf(item);
    if (index >= 0) array.splice(index, 1);
  }
}
