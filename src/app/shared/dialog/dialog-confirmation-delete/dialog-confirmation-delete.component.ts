import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogRef
} from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-confirmation-delete',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose, FontAwesomeModule],
  templateUrl: './dialog-confirmation-delete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogConfirmationDeleteComponent {
  readonly dialogRef = inject(MatDialogRef<DialogConfirmationDeleteComponent>);
  faTrash = faTrash;

  cancel(): void {
    this.dialogRef.close(false)
  }

  confirm(): void {
    this.dialogRef.close(true)
  }
}
