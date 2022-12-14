import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobremimComponent } from './component/sobremim/sobremim.component';
import { ProjetosComponent } from './component/projetos/projetos.component';
import { StacksComponent } from './component/stacks/stacks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobremimComponent,
    ProjetosComponent,
    StacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
