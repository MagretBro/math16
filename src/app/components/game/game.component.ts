

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
  // generateDivisionExamples() {
  //   console.log('second generate division');

  //   if (this.selectedFirstOperand !== null) {
  //     console.log('second generate INSIDE');
  //     this.divisionExamples = [];
  //     const secondArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //     secondArray.forEach((secondVal) => {
  //       if (this.selectedFirstOperand !== null && this.selectedFirstOperand !== 0) {
  //         this.divisionExamples.push(`${this.selectedFirstOperand * secondVal} ÷ ${this.selectedFirstOperand}`);
  //       }
  //     });
  //     this.shuffleArray(this.divisionExamples)
  //     console.log('second generate INSIDE II');;
  //   }
  //   console.log('third');

  // }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  checkAnswer() {
    console.log('4th check answer');

    if (this.userAnswer === (this.currentExampleIndex + 1).toString()) {
      this.currentExampleIndex++;
      this.correctAnswersCount++;
      this.userAnswer = null;
      if (this.currentExampleIndex === this.divisionExamples.length || this.correctAnswersCount >= 10) {
        this.endGame();
      }
    } else {
      alert("Попробуйте еще раз!");
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.checkAnswer();
    }
  }

  endGame() {
    console.log('fifth end game');

    // Логика завершения игры
  }
}
