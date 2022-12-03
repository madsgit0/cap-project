import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoneComponent } from './pages/done/done.component';
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';
import { RegisterPage } from './auth/register/register.page';
import { LoginPage } from './auth/login/login.page';

const routes: Routes = [
  {path:'', component: HomeComponent },
  {path:'saved', component: SavedComponent },
  {path:'done', component: DoneComponent },
  {path:'register', component: RegisterPage },
  {path:'login', component: LoginPage },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
