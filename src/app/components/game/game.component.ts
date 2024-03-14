import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

}




// LEVEL Component
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-level',
//   templateUrl: './level.component.html',
//   styleUrls: ['./level.component.scss']
// })
// export class LevelComponent {

// myFirstOperands: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// selectedFirstOperand: number | null = null;



// onSelectFirstOperand(selectedVal: number) {
//   this.selectedFirstOperand = selectedVal;
//   console.log(this.selectedFirstOperand);
// }


// selectRandomNumber() {
//   const randomIndex = Math.floor(Math.random() * this.myFirstOperands.length);
//   this.selectedFirstOperand = this.myFirstOperands[randomIndex];
//   this.myFirstOperands.splice(randomIndex, 1);
// }


// }


// mySecondOperand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a = math.round(Math.random()*10);



// Исходный массив
// let mySecondOperand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Выбираем случайное число из массива
// let randomIndex = Math.floor(Math.random() * mySecondOperand.length);
// let randomNumber = mySecondOperand[randomIndex];

// Сокращаем массив на выбранное значение
// mySecondOperand.splice(randomIndex, 1);

// Вывод результата
// console.log("Выбранное случайное число:", randomNumber);
// console.log("Массив после сокращения:", mySecondOperand);

