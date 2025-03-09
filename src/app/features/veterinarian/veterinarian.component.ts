import { Component, inject } from '@angular/core';
import { VeterinarianService } from './veterinarian.service';
import { MatDialog } from '@angular/material/dialog';
import { faTrash, faEdit, faCheck, faHourglass, faPlus, faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { DialogConfirmationDeleteComponent } from '../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component';
import { ConsultationFicheComponent } from '../consultation/patient-fiche/consultation-fiche.component';
import { ConsultationFormComponent } from '../consultation/patient-form/consultation-form.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-veterinarian',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule],
  templateUrl: './veterinarian.component.html',
})
export class VeterinarianComponent {
  constructor(protected veterinarianService: VeterinarianService){}

  readonly dialog = inject(MatDialog);

  faTrash = faTrash;
  faEdit = faEdit;
  faCheck = faCheck;
  faHourglass = faHourglass;
  faPlus=faPlus;
  faEllipsisVertical=faEllipsisVertical;
  faMagnifyingGlass=faMagnifyingGlass;

  displayedColumns: string[] = ['Nom', 'Prenom', 'Actions'];

  searchTerm: string = '';

  filterConsultations() {
    this.veterinarianService.findVetWithFilter(this.searchTerm);
  }

  deleteVet(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.veterinarianService.deleteVetById(id).subscribe();
    });
  }

  createVet(): void {
    this.dialog.open(ConsultationFormComponent, {
      width: '500px',
    });

    /*dialogRef.afterClosed().subscribe(result => {
      if (result) this.consultationService.createConsultation(id).subscribe();
    });*/// a vérieri ca refraiche surement deja avec le router.navigate dans l'enfant
  }

  editVet(id: number): void {
    this.dialog.open(ConsultationFormComponent, {
      width: '500px',
      data: {id: id}
    });
  }

  showVet(id: number): void {
    this.dialog.open(ConsultationFicheComponent, {
      width: '500px',
      data: {id: id}
    });
  }
}
