import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TubeFoundationRoutingModule } from './tube-foundation-routing.module';
import { TubeFoundationListComponent } from './tube-foundation-list/tube-foundation-list.component';


@NgModule({
  declarations: [
    TubeFoundationListComponent
  ],
  imports: [
    CommonModule,
    TubeFoundationRoutingModule
  ]
})
export class TubeFoundationModule { }
