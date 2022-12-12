import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavedComponent } from './pages/saved/saved.component';
import { RegisterPage } from './auth/register/register.page';
import { LoginPage } from './auth/login/login.page';
import { AuthGuard } from './auth/auth.guard';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  {path:'', component: HomePage, canActivate:[AuthGuard] },
  {path:'saved', component: SavedComponent },
  {path:'register', component: RegisterPage },
  {path:'login', component: LoginPage },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
