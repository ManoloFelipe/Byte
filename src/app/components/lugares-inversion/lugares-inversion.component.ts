import { Component, OnInit, Inject} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface PeriodicElement {
  descripcion: string;
  codigo: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, descripcion: 'Hydrogen'},
  {codigo: 2, descripcion: 'Helium'},
  {codigo: 3, descripcion: 'Lithium'},
  {codigo: 4, descripcion: 'Beryllium'},
  {codigo: 5, descripcion: 'Boron'},

];

@Component({
  selector: 'app-lugares-inversion',
  templateUrl: './lugares-inversion.component.html',
  styleUrls: ['./lugares-inversion.component.css']
})
export class LugaresInversionComponent implements OnInit {
  animal: string;
  names: string;

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(Dialoglug, {
      width: '60%',
      height: '80%',      
      data: {names: this.names, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  

  ngOnInit() {
  }
  displayedColumns: string[] = ['select', 'codigo', 'descripcion'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows; 
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.codigo + 1}`;
  }
}

//----------------------------------------- COMPONENTE DEL DIALOG --------------------------------------- 

export interface DialogData {
  animal: string;
  names: string;
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'agregar-lugar.component.html',
  styleUrls: ['./lugares-inversion.component.css']
})
export class Dialoglug {

  constructor(
    public dialogRef: MatDialogRef<Dialoglug>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}