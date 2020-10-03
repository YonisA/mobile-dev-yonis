import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsnOneComponentComponent } from './asn-one-component/asn-one-component.component';
import { AsnOnePipePipe } from './asn-one-pipe.pipe';
import { AsnOneDirectiveDirective } from './asn-one-directive.directive';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AsnOneComponentComponent,
    AsnOnePipePipe,
    AsnOneDirectiveDirective,
    ContentCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
