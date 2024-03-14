import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() modalClosed = new EventEmitter<boolean>();

  onAnswer(answer: boolean) {
    this.modalClosed.emit(answer);
  }
}
