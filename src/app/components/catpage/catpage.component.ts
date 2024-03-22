import { Component } from '@angular/core';

@Component({
  selector: 'app-catpage',
  templateUrl: './catpage.component.html',
  styleUrls: ['./catpage.component.scss']
})

export class CatpageComponent {

  showBowlVisible: boolean = false;

  toggleBowlVisibility() {
    this.showBowlVisible = !this.showBowlVisible;
  }

  showBowl() {
    const bowl = document.querySelector('.bowl');
    if (bowl) {
      bowl.classList.remove('hidden');
    }
  }

  moveKitten() {
    const kitten = document.querySelector('.kitten');
    if (kitten) {
      // console.log('Kitten is moving down and scaling up');
      kitten.classList.add('move-down-400');
      kitten.classList.add('scale-up-30');
      // console.log(kitten);
    }
  }
  
}



// ВЕРСИЯ ПЕРЕД ГИМИНИ

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-catpage',
//   templateUrl: './catpage.component.html',
//   styleUrls: ['./catpage.component.scss']
// })
// export class CatpageComponent {

//   showBowlVisible: boolean = false;

//     toggleBowlVisibility() {
//       this.showBowlVisible = !this.showBowlVisible;
//     }
//   showBowl() {
//     const bowl = document.querySelector('.bowl');
//     if (bowl) {
//       bowl.classList.remove('hidden');
//       const kitten = document.querySelector('.kitten');
//       if (kitten) {
//         kitten.classList.add('move-down');
//         // kitten.classList.add('scale-up');
//         console.log('Kitten is moved down and scaled up');
//       } else {
//         console.log('Kitten element not found');
//       }
//     } else {
//       console.log('Bowl element not found');
//     }
//       }
//     }









/////// 1 v


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-catpage',
//   templateUrl: './catpage.component.html',
//   styleUrls: ['./catpage.component.scss']
// })
// export class CatpageComponent {
//   showBowl() {
//     const bowl = document.querySelector('.bowl');
//     if (bowl) {
//       bowl.classList.remove('hidden');
//       setTimeout(() => {
//         bowl.classList.add('hidden');
//       }, 3000)
//     }
//   }

// }
