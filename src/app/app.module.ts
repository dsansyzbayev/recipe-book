import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MainListComponent } from './main-list/main-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { BestRecipesComponent } from './best-recipes/best-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogInComponent,
    SignUpComponent,
    MainListComponent,
    CategoriesComponent,
    BestRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
