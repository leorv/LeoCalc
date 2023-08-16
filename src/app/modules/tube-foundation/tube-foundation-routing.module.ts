import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TubeFoundationListComponent } from './tube-foundation-list/tube-foundation-list.component';

const routes: Routes = [
    {
        path: '',
        component: TubeFoundationListComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TubeFoundationRoutingModule { }
