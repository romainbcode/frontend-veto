import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { tap } from 'rxjs';
import { ConsultationService } from '../consultation.service';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-consultation-fiche',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, FontAwesomeModule],
  templateUrl: './consultation-fiche.component.html',
})
export class ConsultationFicheComponent implements OnInit {
  faXmark=faXmark;

  consultation = {
    titre: '',
    statut: '',
    date: '',
    animal: {nom: '', dateNaissance: ''},
    typeOperation: {titre: ''},
    veterinarian: {nom: '', prenom: ''},
    comment: '',
  }

  constructor(
    protected consultationService: ConsultationService, 
    private dialogRef: MatDialogRef<ConsultationFicheComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {}

  ngOnInit(): void {
    this.loadPatientFormById(this.data.id).subscribe();
  }

  protected loadPatientFormById(id: number) {
    return this.consultationService.findConsultationById(id)
      .pipe(
        tap(res => {
          console.log(res)
          this.consultation = {
            titre: res.titre,
            statut: res.statut.id,
            date: res.date,
            animal: res.animal,
            typeOperation: res.typeOperation,
            veterinarian: res.veterinarian,
            comment: res.comment,
          }
        })
      );
  }

  close(): void {
    this.dialogRef.close(false)
  }
}
