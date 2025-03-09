import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-type-consultation',
  standalone: true,
  imports: [],
  templateUrl: './card-type-consultation.component.html',
})
export class CardTypeConsultationComponent {
  @Input() label!: string;
  @Input() color!: string;
}
