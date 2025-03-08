import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTrash, faEdit, faCheck, faHourglass, faPlus, faEllipsisVertical, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DialogConfirmationDeleteComponent } from "../../shared/dialog/dialog-confirmation-delete/dialog-confirmation-delete.component";
import { DialogConfirmationValidateComponent } from "../../shared/dialog/dialog-confirmation-validate/dialog-confirmation-validate.component";
import { ConsultationFicheComponent } from "../consultation/patient-fiche/consultation-fiche.component";
import { ConsultationFormComponent } from "../consultation/patient-form/consultation-form.component";
import { AnimalService } from "./animal.service";

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [MatTableModule, CommonModule, FontAwesomeModule, MatMenuModule, MatButtonModule, MatDialogModule, FormsModule, MatSortModule],
  templateUrl: './animal.component.html',
})
export class AnimalComponent {

    constructor(protected animalService: AnimalService, private router: Router){}
    
    readonly dialog = inject(MatDialog);

    faTrash = faTrash;
    faEdit = faEdit;
    faCheck = faCheck;
    faHourglass = faHourglass;
    faPlus=faPlus;
    faEllipsisVertical=faEllipsisVertical;
    faMagnifyingGlass=faMagnifyingGlass;

    displayedColumns: string[] = ['Nom', 'DateNaissance', 'Type', 'Propriétaire', 'Actions'];

    searchTerm: string = '';

    filterAnimaux() {
      this.animalService.findAnimalWithFilter(this.searchTerm);
    }

    deleteAnimal(id: number): void {
      const dialogRef = this.dialog.open(DialogConfirmationDeleteComponent, {
          width: '500px',
      });

      dialogRef.afterClosed().subscribe(result => {
          if (result) this.animalService.deleteAnimalById(id).subscribe();
      });
    }

    createAnimal(): void {
      this.dialog.open(ConsultationFormComponent, {
          width: '500px',
      });

    /*dialogRef.afterClosed().subscribe(result => {
        if (result) this.consultationService.createConsultation(id).subscribe();
    });*/// a vérieri ca refraiche surement deja avec le router.navigate dans l'enfant
    }

    editAnimal(id: number): void {
      this.dialog.open(ConsultationFormComponent, {
          width: '500px',
          data: {id: id}
      });
    }

    showAnimal(id: number): void {
      this.dialog.open(ConsultationFicheComponent, {
          width: '500px',
          data: {id: id}
      });
    } 
}