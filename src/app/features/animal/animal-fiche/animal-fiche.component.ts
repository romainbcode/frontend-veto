import { Component, inject, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule, MatDialog } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs';
import { ConsultationFicheComponent } from '../../consultation/consultation-fiche/consultation-fiche.component';
import { ConsultationService } from '../../consultation/consultation.service';
import { AnimalService } from '../animal.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { CardTypeConsultationComponent } from '../../../shared/card/card-type-consultation/card-type-consultation.component';
import { CardVetComponent } from '../../../shared/card/card-vet/card-vet.component';
import { CalculService } from '../../../shared/calcul.service';

@Component({
  selector: 'app-animal-fiche',
  standalone: true,
  imports: [MatTableModule, FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, FontAwesomeModule, MatMenuModule, MatButtonModule, MatSortModule, CardTypeConsultationComponent, CardVetComponent],
  templateUrl: './animal-fiche.component.html',
})
export class AnimalFicheComponent {
  faXmark=faXmark;

  readonly dialog = inject(MatDialog);

  animal = {
    nom: '',
    dateNaissance: '',
    type: { id: '', label: '' },
    proprietaire: {nom: '', prenom: '', email: ''}
  }

  consultation: any[] = []

  myForm = new UntypedFormGroup({
    titre: new UntypedFormControl('', [Validators.required]),
    statut: new UntypedFormControl('', [Validators.required]),
    date: new UntypedFormControl('', [Validators.required]),
    typeOperation: new UntypedFormControl('', [Validators.required]),
    veterinarian: new UntypedFormControl('', [Validators.required]),
  });

  displayedColumns: string[] = ['Statut', 'Titre', 'Date', 'Veterinaire', 'TypeOperation'];

  constructor(
    protected animalService: AnimalService, 
    protected consultationService: ConsultationService,
    protected calculService: CalculService,
    private dialogRef: MatDialogRef<ConsultationFicheComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {}

  ngOnInit(): void {
    this.loadAnimalById(this.data.id).subscribe();
    this.loadConsultationByAnimalId(this.data.id).subscribe();
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

  protected showConsultation(id: number): void {
    this.dialog.open(ConsultationFicheComponent, {
      width: '500px',
      data: {id: id}
    });
  } 

  close(): void {
    this.dialogRef.close(false)
  }
}
