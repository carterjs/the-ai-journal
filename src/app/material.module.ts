import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatListModule, MatButtonModule, MatInputModule, MatCardModule, MatIconModule, MatToolbarModule, MatMenuModule, MatProgressSpinnerModule, MatSelectModule, MatButtonToggleModule, MatTabsModule, MatDialogModule, MatBottomSheetModule } from '@angular/material';

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
    MatTabsModule,
    MatDialogModule,
    MatBottomSheetModule
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
    MatTabsModule,
    MatDialogModule,
    MatBottomSheetModule

  ]
})
export class MaterialModule { }
