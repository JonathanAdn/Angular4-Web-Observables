import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

import { FilterByPipe } from '../pipes/filter-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FormsModule
  ],
  declarations: [
    FilterByPipe,
    FileDropDirective,
    FileSelectDirective
  ],
  exports: [
    FilterByPipe,
    FileDropDirective,
    FileSelectDirective
  ]
})
export class SharedModule { }
