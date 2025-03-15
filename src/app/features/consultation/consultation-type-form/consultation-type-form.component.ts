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
import { CardTypeConsultationComponent } from '../../../shared/card/card-type-consultation/card-type-consultation.component';

@Component({
  selector: 'app-consultation-type-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, CardTypeConsultationComponent],
  templateUrl: './consultation-type-form.component.html',
})
export class ConsultationTypeForm implements OnInit {
  myForm = new UntypedFormGroup({
    label: new UntypedFormControl('', [Validators.required]),
    color: new UntypedFormControl('', [Validators.required]),
    comment: new UntypedFormControl('', [Validators.required]),
  });

  previewLabel: string = '';
  previewColor: string = '#000';

  constructor(
    protected consultationService: ConsultationService,
    private router: Router,
    private dialogRef: MatDialogRef<ConsultationTypeForm>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(values => {
      this.previewLabel = values.label;
      this.previewColor = values.color;
    });
  }

  cancel(): void {
    this.dialogRef.close(false)
  }

  confirm(): void {
    this.dialogRef.close(true)
  }

  protected onSubmit() {
    const typeConsultation: any = this.myForm.value as any;
    //this.myForm.markAllAsTouched();
    if(this.myForm.valid) {
      this.consultationService.createTypeConsultation(typeConsultation).subscribe(() => {
        this.router.navigate(['/consultation']);
      })
    } else {
      console.log('erreur, formulaire pas validé')
    }
  }

  protected get labelFc(): UntypedFormControl {
    return this.myForm.get('type') as UntypedFormControl;
  }

  protected get colorFc(): UntypedFormControl {
    return this.myForm.get('color') as UntypedFormControl;
  }

  protected get commentFc(): UntypedFormControl {
    return this.myForm.get('comment') as UntypedFormControl;
  }
}
