import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Paper } from 'src/app/model/paper';

@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paper-detail.component.css']
})
export class PaperDetailComponent {

  @Input() paper: Paper | null = null;
  @Output() paperEmit = new EventEmitter<Paper>();


  modalState = false;

  openModal() {
    this.modalState = true;
    this.paperEmit.emit(this.paper!);
  }

  closeModal() {
    this.modalState = false;
  }

}
