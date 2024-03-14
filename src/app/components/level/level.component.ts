import { Component, ElementRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
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

constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    if (this.userAnswerInput) {
      this.userAnswerInput.nativeElement.focus();
    }
  }

  onSelectFirstOperand(selectedVal: number) {
    this.selectedFirstOperand = selectedVal;
    this.generateMultiplicationExamples();
    this.currentExampleIndex = 0;
    this.userAnswer = null;
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
      if (this.currentExampleIndex === this.multiplicationExamples.length) {
        if (this.correctAnswersCount >= 10) {
          this.showModal = true;
          this.loadModalComponent();
        } else {
          alert("Лерочка молодец");
        }
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


  onModalClosed(answer: boolean) {
    if (answer) {
      // Переход на следующий уровень или другие действия при выборе "Да"
    } else {
      // Переход на главную страницу или другие действия при выборе "Главная страница"
    }
    this.showModal = false;
  }

  loadModalComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    this.modalContainer.clear();
    const componentRef = this.modalContainer.createComponent(componentFactory);
  }

}