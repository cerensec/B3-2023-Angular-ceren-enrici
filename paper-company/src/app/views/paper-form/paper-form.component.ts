import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Paper } from 'src/app/model/paper';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-paper-form',
  templateUrl: './paper-form.component.html',
  styleUrls: ['./paper-form.component.css']
})
export class PaperFormComponent {

  @Output() addPaper = new EventEmitter<Paper>();
  @Output() editPaper = new EventEmitter<Paper>();
  @Input() paperToEdit: Paper | null = null;

  constructor(private service : ProductsService, private router : Router, private route: ActivatedRoute){}

  ngOnChanges(){
    if(this.paperToEdit){
      this.paperFormGroup.patchValue({
        nom: this.paperToEdit.nom,
        texture: this.paperToEdit.texture,
        grammage: this.paperToEdit.grammage,
        couleur: this.paperToEdit.couleur
      });
    }
  }
  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if(id){
        this.paperToEdit = this.service.getPaperById(id);
      }
    }
    );
    if(this.paperToEdit){
      this.paperFormGroup.patchValue({
        nom: this.paperToEdit.nom,
        texture: this.paperToEdit.texture,
        grammage: this.paperToEdit.grammage,
        couleur: this.paperToEdit.couleur
      });
    }
  }

  paperFormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', Validators.required),
    texture: new FormControl('', Validators.required),
    grammage: new FormControl('', Validators.required),
    couleur: new FormControl('', Validators.required),
  });

  isFormValid(){
    return !this.paperFormGroup.invalid;
  }

  onSubmit(){
    if(this.paperToEdit != null){
      let paper = new Paper(this.paperToEdit.id!, this.paperFormGroup.value.nom!, this.paperFormGroup.value.texture!, this.paperFormGroup.value.grammage!, this.paperFormGroup.value.couleur!);
      this.service.editPaper(paper);
      this.router.navigate(['/paperList']);
    }else{
      let paper = new Paper((this.service.getMaxId()+1).toString(), this.paperFormGroup.value.nom!, this.paperFormGroup.value.texture!, this.paperFormGroup.value.grammage!, this.paperFormGroup.value.couleur!);
      this.service.addPaper(paper);
      this.router.navigate(['/paperList']);
    }
  }
}
