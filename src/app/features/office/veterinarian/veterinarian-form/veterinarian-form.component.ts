import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { VeterinarianService } from '../veterinarian.service';

@Component({
  selector: 'app-veterinarian-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './veterinarian-form.component.html',
})
export class VeterinarianFormComponent implements OnInit {
  myForm = new UntypedFormGroup({
    nom: new UntypedFormControl('', [Validators.required]),
    prenom: new UntypedFormControl('', [Validators.required]),
  });

  constructor(
    protected veterinarianService: VeterinarianService,
    private router: Router,
    private dialogRef: MatDialogRef<VeterinarianFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.loaVeterinarianFormById(this.data.id).subscribe();
    }
  }

  cancel(): void {
    this.dialogRef.close(false)
  }

  confirm(): void {
    this.dialogRef.close(true)
  }

  protected loaVeterinarianFormById(id: number) {
    return this.veterinarianService.findVetById(id).pipe(
      tap((res) => {
        this.myForm.patchValue({
          titre: res.titre,
          type: res.type,
        });
      })
    );
  }

  protected onSubmit() {
    const vet: any = this.myForm.value as any;
    //this.myForm.markAllAsTouched();
    if(this.myForm.valid) {
      this.veterinarianService.createVet(vet).subscribe(() => {
        this.router.navigate(['/office']);
      })
    } else {
      console.log('erreur, formulaire pas validé')
    }
  }

  protected get nomFc(): UntypedFormControl {
    return this.myForm.get('nom') as UntypedFormControl;
  }
  protected get prenomFc(): UntypedFormControl {
    return this.myForm.get('prenom') as UntypedFormControl;
  }
}
