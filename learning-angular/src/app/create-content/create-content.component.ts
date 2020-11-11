import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newEvent = new EventEmitter<Content>();
  newAddition: Content;
  error: string;
  constructor() {
    this.newAddition = {
      id: 0,
      title: '',
      author: '',
      imageUrl: '',
      tags: [],
      type: '',
      body: ''
    };
  }
  ngOnInit(): void {
  }
  addContent(): void{
    const promise = new Promise((success, fail) => {
      if (this.newAddition.id == null || this.newAddition.title.trim() === '' || this.newAddition.author.trim() === '' || this.newAddition.body.trim() === '' || this.newAddition.type.trim() === ''){
        fail('Failure');
        this.error = 'something broke';
      }
      else{
        console.log('emitted', this.newAddition.title);
        this.newEvent.emit(this.newAddition);
        success('Success');
        this.error = '';
      }
    });
    promise.then((success) => console.log(success),
      (fail) => console.log(fail)
    );
  }
}
