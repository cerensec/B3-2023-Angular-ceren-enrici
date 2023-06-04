import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Paper } from 'src/app/model/paper';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paper-detail.component.css']
})
export class PaperDetailComponent {

  @Input() paper: Paper | null = null;
  @Output() paperEmit = new EventEmitter<Paper>();

  constructor(private route: ActivatedRoute, private service : ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id){
        this.paper = this.service.getPaperById(id);
      }
    }
    );
  }

  openModal() {
    this.router.navigate(['/paperForm/'+this.paper?.id]);
  }



}
