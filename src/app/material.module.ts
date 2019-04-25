import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatListModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, MatToolbarModule, MatMenuModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule

  ]
})
export class MaterialModule { }
