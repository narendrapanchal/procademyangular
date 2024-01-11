import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import {HeaderComponent}  from "./header/header.component"
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './header/container/container.component';
import { SearchComponent } from './header/container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './header/container/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
