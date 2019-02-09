import { Component } from '@angular/core';
import { DataItem } from './models/data-item';

@Component({
  selector: 'app-angular-webpack',
  templateUrl: './angular-webpack.component.html',
  styleUrls: ['./angular-webpack.component.css'],
})
export class AngularWebpackComponent {
  itemList: DataItem[];
  selectedItemId: number;
  name = 'Angular';
  constructor() {
    this.itemList = [new DataItem(1, 'Item 1'), new DataItem(2, 'Item 2')];
  }
  greeting() {
    return 'Hello, ' + this.name;
  }
  getDetails() {
    // Empty
  }
}
