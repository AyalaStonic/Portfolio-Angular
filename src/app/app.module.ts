import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgnularTestingComponent } from './agnular-testing/agnular-testing.component';

@NgModule({
  declarations: [
    AppComponent,
    AgnularTestingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
