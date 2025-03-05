import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, of, tap } from 'rxjs';
import { PatientService } from '../patient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-fiche',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './patient-fiche.component.html',
})
export class PatientFicheComponent {
  constructor(protected patientService: PatientService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.pipe(
      mergeMap((params) => {
        return params['id'] ?
        this.loadPatientFormById(params['id']) : of(null)
      })
    ).subscribe()
  }

  myForm = new UntypedFormGroup({
    nom: new UntypedFormControl('', [Validators.required]),
    age: new UntypedFormControl('', [Validators.required]),
    type: new UntypedFormControl('', [Validators.required]),
    statut: new UntypedFormControl('', [Validators.required])
  });

  protected loadPatientFormById(id: number) {
    return this.patientService.findPatientById(id)
      .pipe(
        tap(res => {
          this.myForm.patchValue({
            'nom': res.nom,
            'age': res.age,
            'type': res.type,
            'statut': res.statut,
            'infos-comp': ''
          })
          this.myForm.disable();
        })
      );
  }
}
