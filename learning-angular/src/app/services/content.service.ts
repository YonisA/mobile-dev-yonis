import { Injectable } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };
  constructor(private messageService: MessageService, private http: HttpClient ) { }
  listOfObservableItems(): Observable<Content[]>{
    this.messageService.add('Content retrieved!');
    return this.http.get<Content[]>('api/content');
  }
  addItem(content: Content): Observable<Content>{
    this.messageService.add('added stuff... pretty cool yo');
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }
}
