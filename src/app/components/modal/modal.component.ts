import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
  
  @Input() hit;
  @Output() btnCloseClickEvent = new EventEmitter;

  btnClicked() {
    this.btnCloseClickEvent.emit();
  };


}
