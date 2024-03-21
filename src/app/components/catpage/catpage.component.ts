import { Component } from '@angular/core';

@Component({
  selector: 'app-catpage',
  templateUrl: './catpage.component.html',
  styleUrls: ['./catpage.component.scss']
})
export class CatpageComponent {
  showBowl() {
    const bowl = document.querySelector('.bowl');
    if (bowl) {
      bowl.classList.remove('hidden');
      setTimeout(() => {
        bowl.classList.add('hidden');
      }, 3000)
    }
  }

}
