import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, of, tap } from 'rxjs';
import { ConsultationService } from '../consultation.service';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-consultation-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './consultation-form.component.html',
})
export class ConsultationFormComponent implements OnInit {
  constructor(
    protected consultationService: ConsultationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        mergeMap((params) => {
          return params['id']
            ? this.loadPatientFormById(params['id'])
            : of(null);
        })
      )
      .subscribe();
  }

  myForm = new UntypedFormGroup({
    nom: new UntypedFormControl('', [Validators.required]),
    age: new UntypedFormControl('', [Validators.required]),
    type: new UntypedFormControl('', [Validators.required]),
    statut: new UntypedFormControl('', [Validators.required]),
  });

  types = [
    { id: 1, libelle: 'Chien' },
    { id: 2, libelle: 'Chat' },
    { id: 3, libelle: 'NAC' }
  ];

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

  protected get nomFc(): UntypedFormControl {
    return this.myForm.get('nom') as UntypedFormControl;
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
