import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hits;
  @Output() rowClick = new EventEmitter();


  rowClicked (i) {
    this.rowClick.emit(i);
  };
}
