import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { LevelComponent } from './components/level/level.component';
import { MainComponent } from './components/main/main.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
    { path: '', component: MainComponent},
    { path: 'game', component: GameComponent},
    { path: 'level', component: LevelComponent},
    { path: 'sign-in', component: SignInComponent}
    
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
