import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs';
import { ConsultationFicheComponent } from '../../consultation/consultation-fiche/consultation-fiche.component';
import { DocumentService } from '../document.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-document-fiche',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDialogModule, FontAwesomeModule],
  templateUrl: './document-fiche.component.html',
})
export class DocumentFicheComponent implements OnInit {
  faXmark=faXmark;

  myForm = new UntypedFormGroup({
      titre: new UntypedFormControl('', [Validators.required]),
      type: new UntypedFormControl('', [Validators.required]),
      infosComp: new UntypedFormControl('', [Validators.required])
    });

  constructor(
    protected documentService: DocumentService, 
    private dialogRef: MatDialogRef<ConsultationFicheComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
    {}

  ngOnInit(): void {
    if(this.data?.id) {
      this.loadDocumentFormById(this.data.id).subscribe();
    }else if(this.data === null) {
      console.log("dans else")
      this.myForm.get('titre')?.valueChanges.subscribe((documentId) => {
        this.updateInfosComp(documentId);
      });
    }
  }

  private updateInfosComp(documentId: number): void {
    const selectedDocument = this.documentService.documents().find(doc => doc.id === documentId);
    if (selectedDocument) {
      this.myForm.get('infosComp')?.setValue(selectedDocument.content);
    }
  }

  protected loadDocumentFormById(id: number) {
    return this.documentService.findDocumentById(id)
      .pipe(
        tap(res => {
          this.myForm.patchValue({
            'titre': res.titre,
            'type': res.type,
            'infosComp': res.content
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
