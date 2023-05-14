import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../Models/category';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent {
  
    categories: Category[];
    constructor() { 
      this.categories = [
        {id: 0, name: 'All'},
        {id: 1, name: 'Action'},
        {id: 2, name: 'Adventure'},
        {id: 3, name: 'Racing'},
        {id: 4, name: 'Sports'},
        {id: 5, name: 'Strategy'},
        {id: 6, name: 'Simulation'},
      ];
    }

    @Output() changed=new EventEmitter<number>();

    onChange(target: any): void{
      this.changed.emit(parseInt(target.value));
    }
}
