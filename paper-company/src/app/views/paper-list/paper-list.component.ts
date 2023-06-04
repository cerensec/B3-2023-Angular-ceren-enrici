import { Component, EventEmitter, Output } from '@angular/core';
import { Paper } from 'src/app/model/paper';
import { ProductsService } from 'src/app/services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.css']
})
export class PaperListComponent {
  papers : Paper[] = [];
  selectedPaper : Paper | null = null;
  @Output() paperEmit = new EventEmitter<Paper>();

  constructor(private list : ProductsService, private router: Router){

  }

  ngOnInit(){
    this.papers = this.list.getPapers();
  }

  ngOnChanges(){
    this.papers = this.list.getPapers();
  }

  paperClick(paper: Paper){
    this.selectedPaper = paper;
    console.log(paper);
    this.paperEmit.emit(this.selectedPaper);
    this.router.navigate(['/paperDetail/'+paper.id]);
  }

  openModal(){
    this.router.navigate(['/paperForm']);
  }
}
