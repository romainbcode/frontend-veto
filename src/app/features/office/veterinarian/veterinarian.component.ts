import { Component, inject } from '@angular/core';
import { VeterinarianService } from './veterinarian.service';
import { MatDialog } from '@angular/material/dialog';
import { faTrash, faEdit, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogConfirmationDeleteComponent } from '../../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component';
import { ConsultationFicheComponent } from '../../consultation/consultation-fiche/consultation-fiche.component';
import { ConsultationFormComponent } from '../../consultation/consultation-form/consultation-form.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { VeterinarianFormComponent } from './veterinarian-form/veterinarian-form.component';

@Component({
  selector: 'app-veterinarian',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule, MatMenuModule, MatButtonModule],
  templateUrl: './veterinarian.component.html',
})
export class VeterinarianComponent {
  constructor(protected veterinarianService: VeterinarianService){}

  readonly dialog = inject(MatDialog);

  faTrash = faTrash;
  faEdit = faEdit;
  faPlus=faPlus;
  faEllipsisVertical=faEllipsisVertical;

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
    this.dialog.open(VeterinarianFormComponent, {
      width: '500px',
    });
  }

  editVet(id: number): void {
    this.dialog.open(VeterinarianFormComponent, {
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
