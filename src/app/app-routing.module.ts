import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { LevelComponent } from './components/level/level.component';
import { MainComponent } from './components/main/main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegistComponent } from './components/regist/regist.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
    { path: '', component: MainComponent},
    { path: 'game', component: GameComponent},
    { path: 'level', component: LevelComponent},
    { path: 'sign-in', component: SignInComponent},
    { path: 'regist', component: RegistComponent}
    
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
