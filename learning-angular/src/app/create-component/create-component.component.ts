import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  @Output() newEvent = new EventEmitter<Content>();
  newAddition: any;
  error: string;
  constructor(private contentService: ContentService) {
    this.newAddition = {
      title: '',
      author: '',
      imageUrl: '',
      type: '',
      body: ''
    };
  }

  ngOnInit(): void {
  }
  addContent(): void{
    let itemFromServer: Content;
      // tslint:disable-next-line:max-line-length
    if (this.newAddition.title.trim() === '' || this.newAddition.author.trim() === '' || this.newAddition.body.trim() === '' || this.newAddition.type.trim() === ''){
      this.error = 'something broke';
      }
      else{
      console.log('emitted', this.newAddition.title);
      this.contentService.addItem(this.newAddition).subscribe(serverItem => {
          itemFromServer = serverItem;
          this.newEvent.emit(itemFromServer);
        });
      this.error = '';
      }
    }
}
