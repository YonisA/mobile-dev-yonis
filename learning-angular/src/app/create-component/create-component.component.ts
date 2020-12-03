import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  @Output() newEvent = new EventEmitter<Content>();
  newAddition: any;
  error: string;
  constructor(private contentService: ContentService, public matDialog: MatDialog) {
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
  openDialog(): void {
    const contentDialogRef = this.matDialog.open(ContentDialog, {
      width: '600px'
    });
    contentDialogRef.afterClosed().subscribe(newContentFromDialog => {
      this.newAddition = newContentFromDialog;
      if (this.newAddition){
        this.addContent();
      }
    });
  }
}
@Component({
  selector: 'app-create-content-dialog',
  templateUrl: './create-entry-dialog.component.html',
})
export class ContentDialog {
  newAddition: any;
  constructor(public dialogRef: MatDialogRef<ContentDialog>) {
    this.newAddition = {
      title: '',
      author: '',
      imageUrl: '',
      type: '',
      body: ''
    };
  }

  noClick(): void {
    this.dialogRef.close();
  }

}
