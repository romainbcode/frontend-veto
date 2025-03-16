import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faEdit, faCheck, faHourglass, faEllipsisVertical, faPlus, faMagnifyingGlass, faFileText } from '@fortawesome/free-solid-svg-icons';
import { DialogConfirmationDeleteComponent } from '../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component'; 
import { ConsultationService } from './consultation.service';
import { DialogConfirmationValidateComponent } from '../../shared/dialog/dialog-confirmation-validate/dialog-confirmation-validate.component';
import { CardVetComponent } from '../../shared/card/card-vet/card-vet.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ConsultationFormComponent } from './consultation-form/consultation-form.component';
import {
  MatDialog,
  MatDialogModule,
  
} from '@angular/material/dialog';
import { ConsultationFicheComponent } from './consultation-fiche/consultation-fiche.component';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { ConsultationTypeForm } from './consultation-type-form/consultation-type-form.component';
import { CardTypeConsultationComponent } from '../../shared/card/card-type-consultation/card-type-consultation.component';
import { DocumentFicheComponent } from '../document/document-fiche/document-fiche.component';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule, MatMenuModule, MatButtonModule, MatDialogModule, FormsModule, MatSortModule, CardVetComponent, CardTypeConsultationComponent],
  templateUrl: './consultation.component.html',
})
export class ConsultationComponent {
  constructor(protected consultationService: ConsultationService, private router: Router){}

  readonly dialog = inject(MatDialog);

  faTrash = faTrash;
  faEdit = faEdit;
  faCheck = faCheck;
  faHourglass = faHourglass;
  faPlus=faPlus;
  faEllipsisVertical=faEllipsisVertical;
  faMagnifyingGlass=faMagnifyingGlass;
  faFileText = faFileText;

  displayedColumns: string[] = ['Statut', 'Titre', 'Date', 'Animal', 'Veterinaire', 'TypeOperation', 'Actions'];

  searchTerm: string = '';

  filterConsultations() {
    this.consultationService.findConsultationWithFilter(this.searchTerm);
  }

  deleteConsultation(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.consultationService.deleteConsultationById(id).subscribe();
    });
  }

  createTypeConsultation(): void {
    this.dialog.open(ConsultationTypeForm, {
      width: '500px',
    });
  }

  createConsultation(): void {
    this.dialog.open(ConsultationFormComponent, {
      width: '500px',
    });

    /*dialogRef.afterClosed().subscribe(result => {
      if (result) this.consultationService.createConsultation(id).subscribe();
    });*/// a vérieri ca refraiche surement deja avec le router.navigate dans l'enfant
  }

  editConsultation(id: number): void {
    this.dialog.open(ConsultationFormComponent, {
      width: '500px',
      data: {id: id}
    });
  }

  showConsultation(id: number): void {
    this.dialog.open(ConsultationFicheComponent, {
      width: '500px',
      data: {id: id}
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

  generateDocument(): void {
    this.dialog.open(DocumentFicheComponent, {
      width: '500px',
    });
  }

  get consultationsFinishedCount() {
    return this.consultationService.consultations().filter((consultation) => consultation.statut.id === 1)
    .length;
  }

  get consultationsPendingCount() {
    return this.consultationService.consultations().filter((consultation) => consultation.statut.id === 2)
    .length;
  }
}
