
import { Component, ElementRef, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


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
  squares: number[] = Array(10).fill(0);
  correctAnswersCount: number = 0;
  scaleItems: number[] = Array(10).fill(0);
  showModal: boolean = false;



@ViewChild('userAnswerInput') userAnswerInput!: ElementRef;
@ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;
isGameOver: boolean = true;

constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    if (this.userAnswerInput) {
      this.userAnswerInput.nativeElement.focus();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {data:"Лера молодец"},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  onSelectFirstOperand(selectedVal: number) {
    this.selectedFirstOperand = selectedVal;
    this.generateMultiplicationExamples();
    this.currentExampleIndex = 0;
    this.userAnswer = null;
    this.isGameOver = false;
    if (this.userAnswerInput) {
      this.userAnswerInput.nativeElement.focus();
    }
  }

  generateMultiplicationExamples() {
    if (this.selectedFirstOperand !== null) {
      this.multiplicationExamples = [];
      const SecondArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      SecondArray.forEach((secondVal) => {
        this.multiplicationExamples.push(`${this.selectedFirstOperand} * ${secondVal}`);
      });
      this.shuffleArray(this.multiplicationExamples);
    }
  }

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  

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
        return;
      }
    } else {
      alert("Эээээ. А если подумать?");
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.checkAnswer();
    }
  }

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


resetGame() {
  // Сброс всех значений и показ блока .flex-container
  this.isGameOver = false;
  this.correctAnswersCount = 0;
  // Другие сбросы значений, если они есть

  // Показ блока .flex-container
  // Например:
  const flexContainer = document.querySelector('.flex-container');
  if (flexContainer) {
    flexContainer.classList.remove('hide');
  }
}

}








// import { Component, ElementRef, ViewChild, ViewContainerRef, Inject } from '@angular/core';
// import { ModalComponent } from '../modal/modal.component';
// import { CommonModule } from '@angular/common';
// import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
// import {NgIf} from '@angular/common';
// import {MatButtonModule} from '@angular/material/button';
// import {FormsModule} from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';


// @Component({
//   selector: 'app-level',
//   templateUrl: './level.component.html',
//   styleUrls: ['./level.component.scss'],

// })

// export class LevelComponent {
//   myFirstOperands: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   selectedFirstOperand: number | null = null;
//   multiplicationExamples: string[] = [];
//   currentExampleIndex: number = 0;
//   userAnswer: string | null = null;
//   correctAnswers: number = 0;
//   squares: number[] = Array(10).fill(0);
//   correctAnswersCount: number = 0;
//   scaleItems: number[] = Array(10).fill(0);
//   showModal: boolean = false;



// @ViewChild('userAnswerInput') userAnswerInput!: ElementRef;
// @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;

// constructor(public dialog: MatDialog) {}

//   ngAfterViewInit() {
//     if (this.userAnswerInput) {
//       this.userAnswerInput.nativeElement.focus();
//     }
//   }

//   openDialog(): void {
//     const dialogRef = this.dialog.open(ModalComponent, {
//       data: {data:"Лера молодец"},
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
      
//     });
//   }

//   onSelectFirstOperand(selectedVal: number) {
//     this.selectedFirstOperand = selectedVal;
//     this.generateMultiplicationExamples();
//     this.currentExampleIndex = 0;
//     this.userAnswer = null;
//     if (this.userAnswerInput) {
//       this.userAnswerInput.nativeElement.focus();
//     }
//   }

//   generateMultiplicationExamples() {
//     if (this.selectedFirstOperand !== null) {
//       this.multiplicationExamples = [];
//       const SecondArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//       SecondArray.forEach((secondVal) => {
//         this.multiplicationExamples.push(`${this.selectedFirstOperand} * ${secondVal}`);
//       });
//       this.shuffleArray(this.multiplicationExamples);
//     }
//   }

//   shuffleArray(array: any[]) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }


//   checkAnswer() {
//     if (this.userAnswer === eval(this.multiplicationExamples[this.currentExampleIndex])) {
//       this.currentExampleIndex++;
//       this.correctAnswersCount++;
//       this.userAnswer = null;
//       if (this.currentExampleIndex === this.multiplicationExamples.length) {
//         if (this.correctAnswersCount >= 10) {

//           this.openDialog();
//         } else {
//           alert("Лерочка молодец");
//         }
//       }
//     } else {
//       alert("Эээээ. А если подумать?");
//     }
//   }

//   handleKeyPress(event: KeyboardEvent) {
//     if (event.key === 'Enter') {
//       this.checkAnswer();
//     }
//   }


//   onModalClosed(answer: boolean) {
//     if (answer) {
//       // Переход на следующий уровень или другие действия при выборе "Да"
//     } else {
//       // Переход на главную страницу или другие действия при выборе "Главная страница"
//     }
//     this.showModal = false;
//   }


// }