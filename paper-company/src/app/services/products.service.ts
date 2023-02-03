import { Injectable } from '@angular/core';
import { Paper } from '../model/paper';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  papers : Paper[] = [new Paper("1", "Papier A4", "Brillant", "80g", "Blanc"), new Paper("2", "Papier A3", "Mat", "100g", "Blanc")];

  constructor() { }

  getPapers() : Paper[] {
    return this.papers;
  }

  addPaper(paper : Paper){
    this.papers.push(paper);
  }

  editPaper(paper : Paper){
    let index = this.papers.findIndex(p => p.id === paper.id);
    this.papers[index] = paper;
  }

  getMaxId() : number{
    let maxId = 0;
    this.papers.forEach(p => {
      if(parseInt(p.id) > maxId){
        maxId = parseInt(p.id);
      }
    });
    return maxId;
  }
}
