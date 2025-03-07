import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, of, tap } from 'rxjs';
import { OwnerService } from '../owner.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-owner-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './owner-form.component.html',
})
export class OwnerFormComponent {
  myForm = new UntypedFormGroup({
    nom: new UntypedFormControl('', [Validators.required]),
    prenom: new UntypedFormControl('', [Validators.required]),
    numero: new UntypedFormControl('', [Validators.required]),
    mail: new UntypedFormControl('', [Validators.required])
  });

  constructor(
    protected ownerService: OwnerService, 
    private router: Router,
    private dialogRef: MatDialogRef<OwnerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
    if(this.data?.id) {
      this.loadOwnerFormById(this.data.id).subscribe();
    }
  }

  cancel(): void {
    this.dialogRef.close(false)
  }

  confirm(): void {
    this.dialogRef.close(true)
  }

  protected loadOwnerFormById(id: number) {
    return this.ownerService.findOwnerById(id)
    .pipe(
      tap(res => {
        this.myForm.patchValue({
          'nom': res.nom,
          'prenom': res.prenom,
          'numero': res.numero,
          'mail': res.mail
        })
      })
    );
  }

  protected onSubmit() {
    const owner: any = this.myForm.value as any;
    //this.myForm.markAllAsTouched();
    if(this.myForm.valid) {
      this.ownerService.createOwner(owner).subscribe(() => {
        this.router.navigate(['/owner']);
      })
    } else {
      console.log('erreur, formulaire pas validé')
    }
  }
}
