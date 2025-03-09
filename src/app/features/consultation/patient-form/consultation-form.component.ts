import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ConsultationService } from '../consultation.service';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { AnimalService } from '../../animal/animal.service';
import { VeterinarianService } from '../../veterinarian/veterinarian.service';
import { SurgeryService } from '../../surgery/surgery.service';

@Component({
  selector: 'app-consultation-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './consultation-form.component.html',
})
export class ConsultationFormComponent implements OnInit {
  
  myForm = new UntypedFormGroup({
    titre: new UntypedFormControl('', [Validators.required]),
    statut: new UntypedFormControl('', [Validators.required]),
    dateNaissance: new UntypedFormControl('', [Validators.required]),
    animal: new UntypedFormControl('', [Validators.required]),
  });

  types = [
    { id: 1, libelle: 'Chien' },
    { id: 2, libelle: 'Chat' },
    { id: 3, libelle: 'NAC' }
  ];

  statuts = [
    { id: 1, libelle: 'Terminé' },
    { id: 2, libelle: 'En attente' },
    { id: 3, libelle: 'Annulé' }
  ];

  constructor(
    protected consultationService: ConsultationService,
    protected animalService: AnimalService,
    protected veterinarianService: VeterinarianService,
    protected surgeryService: SurgeryService,
    private router: Router,
    private dialogRef: MatDialogRef<ConsultationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.loadPatientFormById(this.data.id).subscribe();
    } else {
      this.myForm.patchValue({
        statut: 2
      })
    }
  }

  cancel(): void {
    this.dialogRef.close(false)
  }

  confirm(): void {
    this.dialogRef.close(true)
  }

  protected loadPatientFormById(id: number) {
    return this.consultationService.findConsultationById(id).pipe(
      tap((res) => {
        this.myForm.patchValue({
          nom: res.nom,
          age: res.age,
          type: res.type.id,
          statut: res.statut,
        });
      })
    );
  }

  protected onSubmit() {
    const consultation: any = this.myForm.value as any;
    //this.myForm.markAllAsTouched();
    if(this.myForm.valid) {
      this.consultationService.createConsultation(consultation).subscribe(() => {
        this.router.navigate(['/consultation']);
      })
    } else {
      console.log('erreur, formulaire pas validé')
    }
  }

  protected get titreFc(): UntypedFormControl {
    return this.myForm.get('titre') as UntypedFormControl;
  }
  protected get ageFc(): UntypedFormControl {
    return this.myForm.get('age') as UntypedFormControl;
  }
  protected get typeFc(): UntypedFormControl {
    return this.myForm.get('type') as UntypedFormControl;
  }
  protected get statutFc(): UntypedFormControl {
    return this.myForm.get('statut') as UntypedFormControl;
  }
}
