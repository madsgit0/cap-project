import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneComponent } from './pages/done/done.component';
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'saved', component: SavedComponent },
  {path:'done', component: DoneComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
