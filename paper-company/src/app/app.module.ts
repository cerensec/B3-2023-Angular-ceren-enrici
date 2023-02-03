import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaperFormComponent } from './views/paper-form/paper-form.component';
import { PaperListComponent } from './views/paper-list/paper-list.component';
import { PaperDetailComponent } from './views/paper-detail/paper-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    PaperFormComponent,
    PaperListComponent,
    PaperDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
