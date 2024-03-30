import { Component, ElementRef, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],

})

export class LevelComponent {
  myFirstOperands: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedFirstOperand: number | null = null;
  multiplicationExamples: string[] = [];
  currentExampleIndex: number = 0;
  userAnswer: string | null = null;
  correctAnswers: number = 0;
  squares: number[] = Array(10).fill(0); // Было заменено с 10 на 3
  correctAnswersCount: number = 0;
  scaleItems: number[] = Array(10).fill(0);  // Было заменено с 10 на 3
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
 //  вызывается при выборе операнда (числа) (level) для начала игры
  onSelectFirstOperand(selectedVal: number) {
    this.selectedFirstOperand = selectedVal;  // level
    this.generateMultiplicationExamples();
    this.currentExampleIndex = 0;   // индекс выбранного числа
    // очистка закрашивания перед началом раунда
    this.correctAnswersCount = 0;
    this.userAnswer = null;
    this.isGameOver = false;
    if (this.userAnswerInput) {
      this.userAnswerInput.nativeElement.focus();
    }
  }

  // генерация примеров в разнобой в рамках умножения на выбранное игроком число
  generateMultiplicationExamples() {
    if (this.selectedFirstOperand !== null) {
      this.multiplicationExamples = []; // массив, куда попадают ответы
      const SecondArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      // const SecondArray: number[] = [1, 2, 3];  // Было заменено с 10 на 3
      // для каждого вопроса генерация: число из (SecondArray) * на выбранный уровень, например на 2
      SecondArray.forEach((secondVal) => {
        this.multiplicationExamples.push(`${this.selectedFirstOperand} * ${secondVal}`);
      });
      this.shuffleArray(this.multiplicationExamples);
    }
  }

  // контроль. итерация i на длину массива - 1, пока i > 0. математич рандом умножения на число в функцию выше
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // это округление рандомного выбора числа, умноженного на индекс+1
      [array[i], array[j]] = [array[j], array[i]]; //  стоп, когда массивы равны друг другу
    }
  }
  
  
// счетчик ответов. проверка ответа. после 10 ответов скрывается блок вопросов. в случае ошибки ответа - реакция
  checkAnswer() {
    if (this.userAnswer === eval(this.multiplicationExamples[this.currentExampleIndex])) {
      this.currentExampleIndex++;
      this.correctAnswersCount++;
      this.userAnswer = null;
      if (this.currentExampleIndex === this.multiplicationExamples.length || this.correctAnswersCount >= 10) {
        // После ответа на 10 вопросов или завершения всех примеров
        // Установите значение isGameOver в true, чтобы скрыть блок .flex-container
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
      alert("Эээээ. А если подумать?");
    }
  }

// функция нажатия на Enter
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

}




