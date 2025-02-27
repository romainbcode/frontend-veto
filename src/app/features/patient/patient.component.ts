import { Component } from '@angular/core';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  constructor(protected patientService: PatientService){}

  displayedColumns: string[] = ['Statut']
}
