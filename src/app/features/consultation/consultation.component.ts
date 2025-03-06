import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit, faCheck, faHourglass } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmationDeleteComponent } from '../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component'; 
import { ConsultationService } from './consultation.service';
import { DialogConfirmationValidateComponent } from '../../shared/dialog/dialog-confirmation-validate/dialog-confirmation-validate.component';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule],
  templateUrl: './consultation.component.html',
})
export class ConsultationComponent {
  constructor(protected consultationService: ConsultationService, private router: Router){}

  readonly dialog = inject(MatDialog);

  faTrash = faTrash;
  faEdit = faEdit;
  faCheck = faCheck;
  faHourglass = faHourglass;

  displayedColumns: string[] = ['Type', 'Statut', 'Nom', 'Age',  'Actions']

  deleteConsultation(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.consultationService.deleteConsultationById(id).subscribe();
    });
  }

  completeConsultation(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmationValidateComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.consultationService.completeConsultationById(id).subscribe()
    })
  }

  get consultationsFinishedCount() {
    return this.consultationService.consultations().filter((consultation) => consultation.type.id === 1)
    .length;
  }

  get consultationsPendingCount() {
    return this.consultationService.consultations().filter((consultation) => consultation.type.id === 2)
    .length;
  }

  goToEditConsultation(id: number) {
    this.router.navigate(['/consultation/edit/' + id])
  }

  goToCreateConsultation() {
    this.router.navigate(['/consultation/create'])
  }

  goToConsultation(id: number) {
    this.router.navigate(['/consultation/' + id])
  }
}
