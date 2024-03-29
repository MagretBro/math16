

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
  showScaleVisible: boolean = false;

  ngOnInit(): void {
    // Чтение значения score из localStorage при инициализации компонента
    this.score = parseInt(localStorage.getItem('score') || '0');
    console.log(this.score);
  }

  toggleScaleVisibility() {
    this.showScaleVisible = !this.showScaleVisible;
  }

  showScale() {
    const scale = document.querySelector('.scale');
    if (this.datas.counter <= 0) {
      scale?.classList.remove('hidden');
      } else {
        console.log('datas element not found');
      }
  }

  toggleBowlVisibility() {
    this.showBowlVisible = !this.showBowlVisible;
  }

  showBowl() {
    const bowl = document.querySelector('.bowl');
    if (bowl) {
      bowl.classList.remove('hidden');
      const kitten = document.querySelector('.kitten');
      if (kitten) {
        kitten.classList.add('move-down-400');
        // kitten.classList.add('scale-up');
        console.log('Kitten is moved down and scaled up');
      } else {
        console.log('Kitten element not found');
      }
    } else {
      console.log('Bowl element not found');
    }
    //let score = parseInt(localStorage.getItem('score') || '0'); // Получаем текущее значение score из localStorage и парсим его в число
    if (this.score >= 1) { // Проверяем, что score больше или равен 1
      // console.log(this.score--);
      console.log('score-1');

      this.score--; // Уменьшаем score на 1
      localStorage.setItem('score', this.score.toString()); // Записываем новое значение score в localStorage
    }

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
//   score: string | null = null;

//   constructor(
//     public datas: DataService
//      ) {}

//   showBowlVisible: boolean = false;
//   showScaleVisible: boolean = false;

//   ngOnInit(): void {
//     // Чтение значения score из localStorage при инициализации компонента
//     this.score = localStorage.getItem('score');
//     console.log(this.score);
//   }


//   // feedCat() {
//   //   if(this.datas.counter >= 10) {
//   //     this.datas.counter -= 10;
//   //   }
//   // }  

//   toggleScaleVisibility() {
//     this.showScaleVisible = !this.showScaleVisible;
//   }
//   showScale() {
//     const scale = document.querySelector('.scale');
//     if (this.datas.counter <= 0) {
//       scale?.classList.remove('hidden');
//       } else {
//         console.log('datas element not found');
//       }
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
//     let score = parseInt(localStorage.getItem('score') || '0'); // Получаем текущее значение score из localStorage и парсим его в число
//     if (score >= 1) { // Проверяем, что score больше или равен 1
//       score--; // Уменьшаем score на 1
//       localStorage.setItem('score', score.toString()); // Записываем новое значение score в localStorage
//     }

//       }
// }













//// OOOOOLD VERSION

// import { Component, OnInit } from '@angular/core';
// import { DataService } from 'src/app/services/data.service';

// @Component({
//   selector: 'app-catpage',
//   templateUrl: './catpage.component.html',
//   styleUrls: ['./catpage.component.scss']
// })
// export class CatpageComponent implements OnInit {

//   constructor(
//     public datas: DataService
//      ) {}

//   showBowlVisible: boolean = false;
//   showScaleVisible: boolean = false;

//   ngOnInit(): void {
//     // console.log(this.datas.counter)
//     console.log(this.datas.roundPassed);

//   }
  

//   toggleScaleVisibility() {
//     this.showScaleVisible = !this.showScaleVisible;
//   }
//   showScale() {
//     const scale = document.querySelector('.scale');
//     if (this.datas.counter <= 0) {
//       scale?.classList.remove('hidden');
//       } else {
//         console.log('datas element not found');
//       }
//   }




//     toggleBowlVisibility() {
//       this.showBowlVisible = !this.showBowlVisible;
//     }
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
//       }
// }
