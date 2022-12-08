import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FoolibComponent } from '@repoapp/foolib';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, FoolibComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
