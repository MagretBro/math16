import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { LevelComponent } from './components/level/level.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
{ path: '', component: MainComponent},
{ path: 'game', component: GameComponent},
{ path: 'level', component: LevelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
