import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatListModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, MatToolbarModule, MatMenuModule, MatProgressSpinnerModule, MatSelectModule, MatButtonToggleModule, MatTabsModule } from '@angular/material';

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
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTabsModule
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
    MatProgressSpinnerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatTabsModule

  ]
})
export class MaterialModule { }
