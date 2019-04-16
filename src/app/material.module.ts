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
    MatSidenavModule,
    MatDialogModule,
    MatChipsModule,
    MatDatepickerModule,
    MatRadioModule,    

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
        MatSidenavModule,
        MatDialogModule,
        MatChipsModule,
        MatDatepickerModule,
        MatRadioModule
     
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
        MatSidenavModule,
        MatDialogModule,
        MatChipsModule,
        MatDatepickerModule,
        MatRadioModule
    ]
})

export class MetarialModule {}