import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { AbcComponent } from './abc/abc.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    AbcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
