import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { AsnThreePipePipe } from './asn-three-pipe.pipe';
import {FormsModule} from '@angular/forms';
import { HoverStyleDirective } from './hover-style.directive';
import { MessagesComponent } from './messages/messages.component';
import {ContentDialog, CreateComponentComponent} from './create-component/create-component.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    AsnThreePipePipe,
    HoverStyleDirective,
    MessagesComponent,
    CreateComponentComponent,
    ContentDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 }),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [ContentDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
