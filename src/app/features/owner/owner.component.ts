import { Component, inject } from '@angular/core';
import { OwnerService } from './owner.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faTrash, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DialogConfirmationDeleteComponent } from '../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OwnerFormComponent } from './owner-form/owner-form.component';
import { OwnerFicheComponent } from './owner-fiche/owner-fiche.component';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule],
  templateUrl: './owner.component.html',
})
export class OwnerComponent {
  constructor(protected ownerService: OwnerService, private router: Router){}

  readonly dialog = inject(MatDialog);

  faTrash = faTrash;
  faEdit = faEdit;
  faPlus = faPlus;

  displayedColumns: string[] = ['Nom', 'Prenom', 'Numero', 'Mail', 'Actions']

  deleteOwner(id: number): void {
    const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ownerService.deleteOwnerById(id).subscribe();
      }
    });
  }

  createOwner(): void {
    this.dialog.open(OwnerFormComponent, {
      width: '500px',
    });
  }

  editOwner(id: number): void {
    this.dialog.open(OwnerFormComponent, {
      width: '500px',
      data: {id: id}
    });
  }

  showConsultation(id: number): void {
    this.dialog.open(OwnerFicheComponent, {
      width: '500px',
      data: {id: id}
    });
  } 

  goToEditOwner(id: number) {
    this.router.navigate(['/owner/edit/' + id])
  }

  goToCreateOwner() {
    this.router.navigate(['/owner/create'])
  }

  goToOwner(id: number) {
    this.router.navigate(['/owner/' + id])
  }
}
