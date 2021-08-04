import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VanillaJsComponent } from './vanilla-js/vanilla-js.component';
import { MockDataService } from './core/mock-data.service';

@NgModule({
  declarations: [
    AppComponent,
    VanillaJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ MockDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
