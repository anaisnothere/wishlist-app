import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('sa iau examenul'),
    new WishItem('sa beau cafea', true),
    new WishItem('sa merg la concert')
  ];

  listFilter : any = '0';

  

  title = 'wishlist';

  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  };



  
}
