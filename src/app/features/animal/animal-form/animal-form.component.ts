import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../../animal/animal.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardTypeConsultationComponent } from '../../../shared/card/card-type-consultation/card-type-consultation.component';
import { OwnerService } from '../../owner/owner.service';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, CardTypeConsultationComponent],
  templateUrl: './animal-form.component.html',
})
export class AnimalFormComponent implements OnInit {
  animalForm = new UntypedFormGroup({
    nom: new UntypedFormControl('', [Validators.required]),
    dateNaissance: new UntypedFormControl('', [Validators.required]),
    type: new UntypedFormControl('', [Validators.required]),
    proprietaire: new UntypedFormControl('', [Validators.required]),
  });

  types = [
    { id: 1, label: 'Chien' },
    { id: 2, label: 'Chat' },
    { id: 3, label: 'NAC' }
  ];
  
  constructor(
    protected animalService: AnimalService,
    protected ownerService: OwnerService,
    protected router: Router,
    protected dialogRef: MatDialogRef<AnimalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    if (this.data?.id) {
      this.loadAnimalFormById(this.data.id).subscribe();
    } else {
      this.animalForm.patchValue({
        statut: 2
      })
    }
  }

  protected loadAnimalFormById(id: number) {
    return this.animalService.findAnimalById(id).pipe(
      tap((res) => {
        this.animalForm.patchValue({
          nom: res.nom,
          dateNaissance: res.dateNaissance,
          type: res.type.id,
          proprietaire: res.proprietaire.id,
        });
      })
    );
  }

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const animal: any = this.animalForm.value as any;

    if (this.animalForm.valid) {
      this.animalService.createAnimal(animal).subscribe(() => {
        this.router.navigate(['/animals']);
      });
    } else {
      console.log('Formulaire non valide');
    }
  }
}
