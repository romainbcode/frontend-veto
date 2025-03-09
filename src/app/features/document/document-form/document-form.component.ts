import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ConsultationFormComponent } from '../../consultation/consultation-form/consultation-form.component';
import { DocumentService } from '../document.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './document-form.component.html',
})
export class DocumentFormComponent implements OnInit {
  myForm = new UntypedFormGroup({
    titre: new UntypedFormControl('', [Validators.required]),
    type: new UntypedFormControl('', [Validators.required]),
  });

  constructor(
    protected documentService: DocumentService,
    private router: Router,
    private dialogRef: MatDialogRef<ConsultationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.loadDocumentFormById(this.data.id).subscribe();
    }
  }

  cancel(): void {
    this.dialogRef.close(false)
  }

  confirm(): void {
    this.dialogRef.close(true)
  }

  protected loadDocumentFormById(id: number) {
    return this.documentService.findDocumentById(id).pipe(
      tap((res) => {
        this.myForm.patchValue({
          titre: res.titre,
          type: res.type,
        });
      })
    );
  }

  protected onSubmit() {
    const document: any = this.myForm.value as any;
    //this.myForm.markAllAsTouched();
    if(this.myForm.valid) {
      this.documentService.createDocument(document).subscribe(() => {
        this.router.navigate(['/document']);
      })
    } else {
      console.log('erreur, formulaire pas validé')
    }
  }

  protected get titreFc(): UntypedFormControl {
    return this.myForm.get('titre') as UntypedFormControl;
  }
  protected get typeFc(): UntypedFormControl {
    return this.myForm.get('type') as UntypedFormControl;
  }
}
