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
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog-confirmation-validate',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogContent, MatDialogTitle, MatDialogClose, FontAwesomeModule],
  templateUrl: './dialog-confirmation-validate.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogConfirmationValidateComponent {
  readonly dialogRef = inject(MatDialogRef<DialogConfirmationValidateComponent>);
  faCheck = faCheck;

  cancel(): void {
    this.dialogRef.close(false)
  }

  confirm(): void {
    this.dialogRef.close(true)
  }
}
