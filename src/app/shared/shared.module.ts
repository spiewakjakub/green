import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MonthPipe } from './pipes/month.pipe';
import { DayPipe } from './pipes/day.pipe';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, MonthPipe, DayPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    HeaderComponent, FooterComponent, MonthPipe, DayPipe
  ]
})
export class SharedModule { }
