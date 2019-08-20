import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopTabComponent } from './top-tab/top-tab.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TopTabComponent, SliderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
