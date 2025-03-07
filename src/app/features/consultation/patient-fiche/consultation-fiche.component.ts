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

  myForm = new UntypedFormGroup({
    nom: new UntypedFormControl('', [Validators.required]),
    age: new UntypedFormControl('', [Validators.required]),
    type: new UntypedFormControl('', [Validators.required]),
    statut: new UntypedFormControl('', [Validators.required]),
    infosComp: new UntypedFormControl('', [Validators.required]),

  });

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
          this.myForm.patchValue({
            'nom': res.nom,
            'age': res.age,
            'type': res.type,
            'statut': res.statut,
            'infosComp': ''
          })
          this.myForm.disable();
          this.myForm.get('infosComp')?.enable();
        })
      );
  }

  close(): void {
    this.dialogRef.close(false)
  }
}
