import { Component, inject } from '@angular/core';
import { PatientService } from './patient.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationDeleteComponent } from '../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule],
  templateUrl: './patient.component.html',
})
export class PatientComponent {
  constructor(protected patientService: PatientService, private router: Router){}

  readonly dialog = inject(MatDialog);

  faTrash = faTrash;
  faEdit = faEdit;

  displayedColumns: string[] = ['Type', 'Statut', 'Nom', 'Age',  'Actions']

  deletePatient(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.patientService.deletePatientById(id).subscribe();
      }
    });
  }

  goToEditPatient(id: number) {
    this.router.navigate(['/patient/edit/' + id])
  }

  goToCreatePatient() {
    this.router.navigate(['/patient/create'])
  }

  goToPatient(id: number) {
    this.router.navigate(['/patient/' + id])
  }
}
