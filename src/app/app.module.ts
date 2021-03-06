import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';
import { CalendarItemComponent } from './components/calendar-item/calendar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarListComponent,
    CalendarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
