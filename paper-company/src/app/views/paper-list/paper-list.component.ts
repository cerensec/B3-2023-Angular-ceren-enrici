import { Component, EventEmitter, Output } from '@angular/core';
import { Paper } from 'src/app/model/paper';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.css']
})
export class PaperListComponent {
  papers : Paper[] = [];
  selectedPaper : Paper | null = null;
  modalState = false;
  @Output() paperEmit = new EventEmitter<Paper>();

  constructor(private list : ProductsService){

  }

  ngOnInit(){
    this.papers = this.list.getPapers();
  }

  ngOnChanges(){
    this.papers = this.list.getPapers();
  }

  paperClick(paper: Paper){
    this.selectedPaper = paper;
    this.paperEmit.emit(this.selectedPaper);
  }

  openModal(){
    this.modalState = true;
  }

  closeModal(){
    this.modalState = false;
  }

}
