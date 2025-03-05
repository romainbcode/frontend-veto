import { Component, inject } from '@angular/core';
import { SurgeryService } from './surgery.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DialogConfirmationDeleteComponent } from '../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-surgery',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule],
  templateUrl: './surgery.component.html',
})
export class SurgeryComponent {
  constructor(protected surgeryService: SurgeryService, private router: Router){}

  readonly dialog = inject(MatDialog);

  faTrash = faTrash;
  faEdit = faEdit;

  displayedColumns: string[] = ['Titre', 'Nom', 'Type',  'Actions']

  deleteSurgery(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.surgeryService.deleteSurgeryById(id).subscribe();
      }
    });
  }

  goToEditSurgery(id: number) {
    this.router.navigate(['/surgery/edit/' + id])
  }

  goToCreateSurgery() {
    this.router.navigate(['/surgery/create'])
  }

  goToSurgery(id: number) {
    this.router.navigate(['/surgery/' + id])
  }
}
