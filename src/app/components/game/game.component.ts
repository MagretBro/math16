

import { Component, ElementRef, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {
  myFirstOperands: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedFirstOperand: number | null = null;
  divisionExamples: string[] = [];
  currentExampleIndex: number = 0;
  userAnswer: string | null = null;
  correctAnswersCount: number = 0;
  scaleItems: number[] = Array(10).fill(0); // Добавляем свойство scaleItems

  correctAnswers: number = 0;
  squares: number[] = Array(10).fill(0); // Было заменено с 10 на 3
  showModal: boolean = false;


  @ViewChild('userAnswerInput') userAnswerInput!: ElementRef;
  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
  isGameOver: boolean = true;

  constructor(
    public dialog: MatDialog,
    public datas: DataService
    ) {}

    // после инициализации datas.counter ему присваивается 10, что даст чашку при переходе на catpage
  ngAfterViewInit() {
    this.datas.counter +=10;

    if (this.userAnswerInput) {
      this.userAnswerInput.nativeElement.focus();
    }
  }

// открытие модального окна при завершении раунда (10 ответов)
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {data:"Лера, ты молодец"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  // constructor() {}

  onSelectFirstOperand(selectedVal: number) {
    console.log('first onSelectFirstOperand');
    this.selectedFirstOperand = selectedVal;
    this.generateDivisionExamples();
    this.currentExampleIndex = 0;
    this.correctAnswersCount = 0;
    this.userAnswer = null;
    this.isGameOver = false;
    if (this.userAnswerInput) {
      this.userAnswerInput.nativeElement.focus();
    }
  }

  // генерация примера
  generateDivisionExamples() {
    if (this.selectedFirstOperand !== null) {
      this.divisionExamples = [];
      const secondArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      secondArray.forEach((secondVal) => {
        if (this.selectedFirstOperand !== null && this.selectedFirstOperand !== 0) {
          this.divisionExamples.push(`${this.selectedFirstOperand * secondVal} ÷ ${this.selectedFirstOperand}`);
        }
      });
      this.shuffleArray(this.divisionExamples);
    }
}

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  checkAnswer() {
    const example = this.divisionExamples[this.currentExampleIndex];
    const result = parseInt(example.split('=')[0].trim().split(' ')[0]) / parseInt(example.split('=')[0].trim().split(' ')[2]);
    
    if (parseInt(this.userAnswer || '') === result) {
      this.correctAnswersCount++;       // Увеличиваем счетчик правильных ответов
      this.currentExampleIndex++;      // Переходим к следующему примеру
      this.userAnswer = null;      // Сбрасываем значение введенного пользователем ответа
      // Проверяем, если количество правильных ответов достигло 10 или текущий пример последний
      if (this.currentExampleIndex === this.divisionExamples.length || this.correctAnswersCount >= 10) {
       // this.endGame(); // ?????????
        this.isGameOver = true;
        this.openDialog();

        // попытка прописать в localStorage число ответов с сохранением статистики и учетом счетчика
        // localStorage.setItem('score', 100);
        let score = parseInt(localStorage.getItem('score') || '0');
        if (this.correctAnswersCount % 10 === 0 && this.correctAnswersCount > 0) {  // Было заменено с 10 на 3 // тут заменить на 10!!!
          score += 1;
          localStorage.setItem('score', score.toString());
        }
        console.log(localStorage.getItem('score'));
        return;
      }
    } else {
      // Если ответ неверный, выводим сообщение об ошибке
      alert("Попробуйте еще раз!");
    }
}

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.checkAnswer();
    }
  }


  // Модальное окно. Блок dialog, всплывающего после окончания раунда (10 ответов)
  // Закрытие диалоговых окон
  onNoClick(): void {
    this.dialog.closeAll(); // Закрывает все диалоговые окна
  }


  onModalClosed(answer: boolean) {
    if (answer) {
      // Переход на следующий уровень или другие действия при выборе "Да"
      this.resetGame();

    } else {
      // Переход на главную страницу или другие действия при выборе "Главная страница"
    }
    this.showModal = false;
  }

 // перезапуск игры. появляется поле вопросов. очищается кеш
resetGame() {
  // Сброс всех значений и показ блока .flex-container
  this.isGameOver = false;
  this.correctAnswersCount = 0;
  this.currentExampleIndex = 0;   // ???? мое тестиривание попытки очистить цвет и запуск модалки
  // Другие сбросы значений, если они есть

  // Показ блока .flex-container
  const flexContainer = document.querySelector('.flex-container');
  if (flexContainer) {
    flexContainer.classList.remove('hide');
  }
}

  // endGame() {
  //   console.log('fifth end game');
  //   // Логика завершения игры
  // }
}


// import { Component, ElementRef, ViewChild, ViewContainerRef, Inject } from '@angular/core';
// import { ModalComponent } from '../modal/modal.component';
// import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
// import { DataService } from 'src/app/services/data.service';


// @Component({
//   selector: 'app-game',
//   templateUrl: './game.component.html',
//   styleUrls: ['./game.component.scss']
// })
// export class GameComponent {
//   myFirstOperands: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   selectedFirstOperand: number | null = null;
//   divisionExamples: string[] = [];
//   currentExampleIndex: number = 0;
//   userAnswer: string | null = null;
//   correctAnswersCount: number = 0;
//   scaleItems: number[] = Array(10).fill(0); // Добавляем свойство scaleItems

//   correctAnswers: number = 0;
//   squares: number[] = Array(10).fill(0); // Было заменено с 10 на 3
//   showModal: boolean = false;


//   @ViewChild('userAnswerInput') userAnswerInput!: ElementRef;
//   @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
//   isGameOver: boolean = true;

//   constructor(
//     public dialog: MatDialog,
//     public datas: DataService
//     ) {}

//     // после инициализации datas.counter ему присваивается 10, что даст чашку при переходе на catpage
//   ngAfterViewInit() {
//     this.datas.counter +=10;

//     if (this.userAnswerInput) {
//       this.userAnswerInput.nativeElement.focus();
//     }
//   }

// // открытие модального окна при завершении раунда (10 ответов)
//   openDialog(): void {
//     const dialogRef = this.dialog.open(ModalComponent, {
//       data: {data:"Лера, ты молодец"}
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
      
//     });
//   }

//   // constructor() {}

//   onSelectFirstOperand(selectedVal: number) {
//     console.log('first onSelectFirstOperand');
//     this.selectedFirstOperand = selectedVal;
//     this.generateDivisionExamples();
//     this.currentExampleIndex = 0;
//     this.correctAnswersCount = 0;
//     this.userAnswer = null;
//     this.isGameOver = false;
//     if (this.userAnswerInput) {
//       this.userAnswerInput.nativeElement.focus();
//     }
//   }

//   // генерация примера
//   generateDivisionExamples() {
//     if (this.selectedFirstOperand !== null) {
//       this.divisionExamples = [];
//       const secondArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//       secondArray.forEach((secondVal) => {
//         if (this.selectedFirstOperand !== null && this.selectedFirstOperand !== 0) {
//           this.divisionExamples.push(`${this.selectedFirstOperand * secondVal} ÷ ${this.selectedFirstOperand}`);
//         }
//       });
//       this.shuffleArray(this.divisionExamples);
//     }
// }

//   shuffleArray(array: any[]) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

//   checkAnswer() {
//     const example = this.divisionExamples[this.currentExampleIndex];
//     const result = parseInt(example.split('=')[0].trim().split(' ')[0]) / parseInt(example.split('=')[0].trim().split(' ')[2]);
    
//     if (parseInt(this.userAnswer || '') === result) {
//       // Увеличиваем счетчик правильных ответов
//       this.correctAnswersCount++;
//       // Переходим к следующему примеру
//       this.currentExampleIndex++;
//       // Сбрасываем значение введенного пользователем ответа
//       this.userAnswer = null;
//       // Проверяем, если количество правильных ответов достигло 10 или текущий пример последний
//       if (this.currentExampleIndex === this.divisionExamples.length || this.correctAnswersCount >= 10) {
//         this.endGame();
//       }
//     } else {
//       // Если ответ неверный, выводим сообщение об ошибке
//       alert("Попробуйте еще раз!");
//     }
// }

//   handleKeyPress(event: KeyboardEvent) {
//     if (event.key === 'Enter') {
//       this.checkAnswer();
//     }
//   }

//   endGame() {
//     console.log('fifth end game');

//     // Логика завершения игры
//   }
// }
