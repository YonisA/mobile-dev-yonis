import {Component, OnInit} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ItemList} from '../helper-files/contentDb';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
 listOfItems: Content[];
  indicator: string;
  constructor(private service: ContentService) {
  }
  searchTitle(title: string): void{
    let checker: boolean;
    for (const userEntry of this.listOfItems) {
      if (userEntry.title.toLowerCase() === title.toLowerCase()) {
        checker = true;
        break;
      }else{
        checker = false;
      }
    }
    if (checker){
      console.log('valid hazza!');
      this.indicator = 'valid hazza!';
    }else{
      console.log('invalid kappa');
      this.indicator = 'invalid kappa';
    }
  }
  cloneArray(newContentFromChild: Content): void{
    this.listOfItems.push(newContentFromChild);
    this.listOfItems = Object.assign([], this.listOfItems);
  }
  ngOnInit(): void {
    this.service.listOfObservableItems().subscribe(listOItems => {
      this.listOfItems = listOItems;
    });
  }
}
