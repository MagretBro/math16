import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { LevelComponent } from './components/level/level.component';
import { MainComponent } from './components/main/main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegistComponent } from './components/regist/regist.component';
import { Test2Component } from './components/test2/test2.component';
import { CatpageComponent } from './components/catpage/catpage.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
    { path: '', component: MainComponent},
    { path: 'game', component: GameComponent},
    { path: 'level', component: LevelComponent},
    { path: 'sign-in', component: SignInComponent},
    { path: 'regist', component: RegistComponent},
    { path: 'test2', component: Test2Component},
    { path: 'catpage', component: CatpageComponent }

    
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
