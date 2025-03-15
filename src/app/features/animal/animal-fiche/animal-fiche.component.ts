import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs';
import { ConsultationFicheComponent } from '../../consultation/consultation-fiche/consultation-fiche.component';
import { ConsultationService } from '../../consultation/consultation.service';
import { AnimalService } from '../animal.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-animal-fiche',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, FontAwesomeModule],
  templateUrl: './animal-fiche.component.html',
})
export class AnimalFicheComponent {
  faXmark=faXmark;

  animal = {
    nom: '',
    dateNaissance: '',
    type: { label: '' },
    proprietaire: {nom: '', prenom: '', email: ''}
  }

  consultation: any[] = []

  displayedColumns: string[] = ['Statut', 'Titre', 'Date', 'Veterinaire', 'TypeOperation'];

  constructor(
    protected animalService: AnimalService, 
    protected consultationService: ConsultationService,
    private dialogRef: MatDialogRef<ConsultationFicheComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {}

  ngOnInit(): void {
    this.loadAnimalById(this.data.id).subscribe();
  }

  protected loadAnimalById(id: number) {
    return this.animalService.findAnimalById(id)
      .pipe(
        tap(res => {
          this.animal = {
            nom: res.nom,
            dateNaissance: res.dateNaissance,
            type: res.type,
            proprietaire: res.proprietaire,
          }
        })
      );
  }

  protected loadConsultationByAnimalId(id: number) {
    return this.consultationService.findConsultationByAnimalId(id)
      .pipe(
        tap(res => {
          this.consultation = res;
        })
      );
  }

  close(): void {
    this.dialogRef.close(false)
  }
}
