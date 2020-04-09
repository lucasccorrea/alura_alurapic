import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  
  @Input() photos:Photo[] = [];
  rows:any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos)
      this.rows = this.groupColumns(this.photos);
  }
  
  groupColumns(photos:Photo[]){
    const newRows = [];
    for (let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3));
      //slice(param1, param2) = param1 posição inicial, param2 posição final não inclusiva;
    }
    return newRows;
  }
}
