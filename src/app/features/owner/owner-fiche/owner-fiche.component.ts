import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, of, tap } from 'rxjs';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-fiche',
  standalone: true,
  imports: [],
  templateUrl: './owner-fiche.component.html',
})
export class OwnerFicheComponent {


}
