import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatSidenavModule

} from '@angular/material'

@NgModule({
    imports:[
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatToolbarModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatCheckboxModule,
        MatDialogModule,
        MatRadioModule,
        MatSidenavModule
    ],
    exports:[
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatDividerModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatCheckboxModule,
        MatDialogModule,
        MatRadioModule,
        MatSidenavModule
    ]
})

export class MetarialModule {}