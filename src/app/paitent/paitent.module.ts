import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaitentCreateComponent } from './paitent-create/paitent-create.component';
import { PaitentListComponent } from './paitent-list/paitent-list.component';
import { PaitentDetailComponent } from './paitent-detail/paitent-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [PaitentCreateComponent, PaitentListComponent, PaitentDetailComponent]
})
export class PaitentModule { }
