import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'; 

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LevelComponent } from './components/level/level.component';
import { GameComponent } from './components/game/game.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {NgIf} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LevelComponent,
    GameComponent,
    ToolbarComponent,
    ModalComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
