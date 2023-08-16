import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'tubuloes',
        loadChildren: () => import('./modules/tube-foundation/tube-foundation.module').then(mod => mod.TubeFoundationModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tubuloes'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
