

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-catpage',
  templateUrl: './catpage.component.html',
  styleUrls: ['./catpage.component.scss']
})
export class CatpageComponent implements OnInit {
  score: number = 0;

  constructor(
    public datas: DataService
     ) {}

  showBowlVisible: boolean = false;
  // showScaleVisible: boolean = false; //  был исключен, т к не требуется

  ngOnInit(): void {
    // Чтение значения score из localStorage при инициализации компонента
    this.score = parseInt(localStorage.getItem('score') || '0');
    console.log(this.score);
  }

  toggleBowlVisibility() {
    this.showBowlVisible = !this.showBowlVisible;
  }

  showBowl() {
    console.log('первый');
    const bowl = document.querySelector('.bowl') as HTMLElement;
    if (bowl && this.score > 0) {
      bowl.style.backgroundImage = `url('/assets/img/bowl_full.png')`;
      bowl.classList.remove('hidden');
      const kitten = document.querySelector('.kitten');
      if (kitten) {
        kitten.classList.add('move-down-400');
       // console.log('Kitten is moved down and scaled up');
      } else {
        //console.log('Kitten element not found');
      }
    } else {
      //console.log('Bowl element not found');
    }
    if (this.score >= 1) { // Проверяем, что score больше или равен 1
      this.score--; // Уменьшаем score на 1
      localStorage.setItem('score', this.score.toString()); // Записываем новое значение score в localStorage
      //console.log('score-1');
    }
    console.log('второй');
    setTimeout(() => {
      console.log('третий');
      const bowl = document.querySelector('.bowl') as HTMLElement;
      if (bowl) {
        console.log('четвертый');
        console.log(bowl.style.backgroundImage);
        bowl.style.backgroundImage = `url('/assets/img/bowl_empty.png')`;
        console.log(bowl.style.backgroundImage);
        console.log(bowl.style.backgroundImage);
      }

      // if (this.score > 0) {
      //   console.log('пятый');
      //   setTimeout(() => {
      //     console.log('шестой');
      //     bowl.style.backgroundImage = `url('/assets/img/bowl_full.png')`;
      //   }, 3000);
      // }
    }, 3000 );
  }
}








// import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/services/data.service';

// @Component({
//   selector: 'app-catpage',
//   templateUrl: './catpage.component.html',
//   styleUrls: ['./catpage.component.scss']
// })
// export class CatpageComponent implements OnInit {
//   score: number = 0;

//   constructor(
//     public datas: DataService
//      ) {}

//   showBowlVisible: boolean = false;
//   // showScaleVisible: boolean = false; //  был исключен, т к не требуется

//   ngOnInit(): void {
//     // Чтение значения score из localStorage при инициализации компонента
//     this.score = parseInt(localStorage.getItem('score') || '0');
//     console.log(this.score);
//   }

//   toggleBowlVisibility() {
//     this.showBowlVisible = !this.showBowlVisible;
//   }

//   showBowl() {
//     const bowl = document.querySelector('.bowl');
//     if (bowl) {
//       bowl.classList.remove('hidden');
//       const kitten = document.querySelector('.kitten');
//       if (kitten) {
//         kitten.classList.add('move-down-400');
//         // kitten.classList.add('scale-up');
//         console.log('Kitten is moved down and scaled up');
//       } else {
//         console.log('Kitten element not found');
//       }
//     } else {
//       console.log('Bowl element not found');
//     }
//     //let score = parseInt(localStorage.getItem('score') || '0'); // Получаем текущее значение score из localStorage и парсим его в число
//     if (this.score >= 1) { // Проверяем, что score больше или равен 1
//       // console.log(this.score--);
//       console.log('score-1');

//       this.score--; // Уменьшаем score на 1
//       localStorage.setItem('score', this.score.toString()); // Записываем новое значение score в localStorage
//     }

//   }
// }

