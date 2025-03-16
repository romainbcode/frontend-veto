import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faTrash, faEdit, faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { DocumentService } from './document.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocumentFormComponent } from './document-form/document-form.component';
import { DocumentFicheComponent } from './document-fiche/document-fiche.component';
import { DialogConfirmationDeleteComponent } from '../../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule, MatMenuModule, MatButtonModule],
  templateUrl: './document.component.html',
})
export class DocumentComponent {
constructor(protected documentService: DocumentService, private router: Router){}

  readonly dialog = inject(MatDialog);

  faTrash = faTrash;
  faEdit = faEdit;
  faPlus = faPlus;
  faEllipsisVertical = faEllipsisVertical;

  displayedColumns: string[] = ['Titre', 'Type', 'Actions']

  deleteDocument(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.documentService.deleteDocumentById(id).subscribe();
      }
    });
  }

  createTypeDocument(): void {
    /*this.dialog.open(ConsultationTypeForm, {
      width: '500px',
    });*/
  }

  createDocument(): void {
    this.dialog.open(DocumentFormComponent, {
      width: '500px',
    });
  }

  editDocument(id: number): void {
    this.dialog.open(DocumentFormComponent, {
      width: '500px',
      data: {id: id}
    });
  }

  showDocument(id: number): void {
    this.dialog.open(DocumentFicheComponent, {
      width: '500px',
      data: {id: id}
    });
  } 
}
