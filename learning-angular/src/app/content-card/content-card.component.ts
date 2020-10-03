import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentList} from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  contentList: ContentList;
  showHtml: string;
  constructor() {
    this.contentList = new ContentList();
    this.contentList.contentAdd({
      id: 0,
      author: 'Yonis',
      title: 'Title for Yonis',
      body: 'Body for Yonis '
    });
    this.contentList.contentAdd({
      id: 1,
      author: 'Owen',
      title: 'Title for Owen',
      body: 'Body for Owen'
    });
    this.contentList.contentAdd({
      id: 2,
      author: 'Saad',
      title: 'title for Saad',
      body: 'Body for Saad'
    });
    this.contentList.contentAdd({
      id: 3,
      author: 'Nick',
      title: 'title for Nick',
      body: 'Body for Nick'
    });
    this.showHtml = this.contentList.formatting(0) + this.contentList.formatting(1) + this.contentList.formatting(2);
  }
  ngOnInit(): void {
  }

}
