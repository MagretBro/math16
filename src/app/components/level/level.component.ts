import { Component, ElementRef, ViewChild } from '@angular/core';

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

@ViewChild('userAnswerInput') userAnswerInput!: ElementRef;

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
      this.userAnswer = null;
      if (this.currentExampleIndex === this.multiplicationExamples.length) {
        alert("Лерочка молодец");
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
}