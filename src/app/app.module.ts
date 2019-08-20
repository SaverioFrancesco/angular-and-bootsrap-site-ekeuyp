import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopTabComponent } from './top-tab/top-tab.component';
import { SliderComponent } from './slider/slider.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamComponent } from './team/team.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TopTabComponent, SliderComponent, JumboComponent, WelcomeComponent, TeamComponent, ColumnComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
