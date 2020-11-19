import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ItemList} from '../helper-files/contentDb';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
  listOfObservableItems(): Observable<Content[]>{
    return of(ItemList);
  }
}
