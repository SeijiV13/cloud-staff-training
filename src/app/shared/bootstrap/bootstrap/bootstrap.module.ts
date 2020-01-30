import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, AccordionModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
  ],
  exports: [
    ModalModule,
    AccordionModule
  ]
})
export class BootstrapModule { }
