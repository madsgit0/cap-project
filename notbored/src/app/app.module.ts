import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SavedComponent } from './pages/saved/saved.component';
import { DoneComponent } from './pages/done/done.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GenRandomComponent } from './components/gen-random/gen-random.component';
import { GenTypeComponent } from './components/gen-type/gen-type.component';
import { GenBudgetComponent } from './components/gen-budget/gen-budget.component';
import { GenEasinessComponent } from './components/gen-easiness/gen-easiness.component';
import { GenGroupComponent } from './components/gen-group/gen-group.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SavedComponent,
    DoneComponent,
    NavbarComponent,
    GenRandomComponent,
    GenTypeComponent,
    GenBudgetComponent,
    GenEasinessComponent,
    GenGroupComponent,
    HeaderComponent,
    CardComponent,
    ListCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
