
import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';

export interface DialogData {
  data: any;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  // standalone: true,
  // imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
})


export class ModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    console.log(this.data);
  }
}







// import {Component, Inject} from '@angular/core';
// import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
// import {NgIf} from '@angular/common';
// import {MatButtonModule} from '@angular/material/button';
// import {FormsModule} from '@angular/forms';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';


// export interface DialogData {
//   data: any;
// }

// @Component({
//   selector: 'app-modal',
//   templateUrl: './modal.component.html',
//   // standalone: true,
//   // imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
// })


// export class ModalComponent {
//   constructor(
//     public dialogRef: MatDialogRef<ModalComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }



