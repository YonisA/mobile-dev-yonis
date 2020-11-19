import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ItemList} from '../helper-files/contentDb';
import {Observable, of} from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }
  listOfObservableItems(): Observable<Content[]>{
    this.messageService.add('Content retrieved!');
    return of(ItemList);
  }
}
