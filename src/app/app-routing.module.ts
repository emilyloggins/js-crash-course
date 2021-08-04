import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VanillaJsComponent } from './vanilla-js/vanilla-js.component';

const routes: Routes = [
  { path: '', component: VanillaJsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
