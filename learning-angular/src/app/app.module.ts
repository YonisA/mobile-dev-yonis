import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsnOneComponentComponent } from './asn-one-component/asn-one-component.component';
import { AsnOnePipePipe } from './asn-one-pipe.pipe';
import { AsnOneDirectiveDirective } from './asn-one-directive.directive';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AsnOneComponentComponent,
    AsnOnePipePipe,
    AsnOneDirectiveDirective,
    ContentCardComponent,
    ContentListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
