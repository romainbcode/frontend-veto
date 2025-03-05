import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, of, tap } from 'rxjs';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './owner-form.component.html',
})
export class OwnerFormComponent {
  constructor(protected ownerService: OwnerService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.pipe(
      mergeMap((params) => {
        return params['id'] ?
        this.loadOwnerFormById(params['id']) : of(null)
      })
    ).subscribe()
  }

  myForm = new UntypedFormGroup({
    nom: new UntypedFormControl('', [Validators.required]),
    prenom: new UntypedFormControl('', [Validators.required]),
    numero: new UntypedFormControl('', [Validators.required]),
    mail: new UntypedFormControl('', [Validators.required])
  });

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
}
