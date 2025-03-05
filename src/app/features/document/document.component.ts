import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DialogConfirmationDeleteComponent } from '../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component';
import { DocumentService } from './document.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-document',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule],
  templateUrl: './document.component.html',
})
export class DocumentComponent {
constructor(protected documentService: DocumentService, private router: Router){}

  readonly dialog = inject(MatDialog);

  faTrash = faTrash;
  faEdit = faEdit;

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

  goToEditDocument(id: number) {
    this.router.navigate(['/document/edit/' + id])
  }

  goToCreateDocument() {
    this.router.navigate(['/document/create'])
  }

  goToDocument(id: number) {
    this.router.navigate(['/document/' + id])
  }
}
