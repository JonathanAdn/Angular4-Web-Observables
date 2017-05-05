// built in modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// style modules
import { MaterialModule } from '@angular/material';
import 'hammerjs';

// custom modules
import { RouterModule } from '@angular/router';
import { MoviesModule } from './modules/movies/movies.module';
import { CharactersModule } from './modules/characters/characters.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { ComposeMessageComponent } from './components/compose-message.component';

@NgModule({
  // Module's View classes (components, directives, pipes)
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  // Declarations of other modules used in this module's components
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MoviesModule,
    CharactersModule,
    AppRoutingModule,
    SharedModule
  ],
  // Declarations for use in other Modules
  exports: [],
  // Enables Services within the App
  providers: [],
  // Load the root component, only the root module bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }

// 3 types of directives : 
//  - Directives with templates (components)
//  - Structural Directives: add, delete, replace DOM elements (ngSwitch, ngIf, ngFor...)
//  - Attribute Directives: change appearance of DOM elements