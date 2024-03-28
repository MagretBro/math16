


import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-catpage',
  templateUrl: './catpage.component.html',
  styleUrls: ['./catpage.component.scss']
})
export class CatpageComponent implements OnInit {

  constructor(
    public datas: DataService
     ) {}

  showBowlVisible: boolean = false;
  showScaleVisible: boolean = false;

  ngOnInit(): void {}

  feedCat() {
    if(this.datas.counter >= 10) {
      this.datas.counter -= 10;
    }
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
