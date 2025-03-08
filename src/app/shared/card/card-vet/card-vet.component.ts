import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-vet',
  standalone: true,
  imports: [],
  templateUrl: './card-vet.component.html',
})
export class CardVetComponent {
  @Input() firstName!: string;
  @Input() lastName!: string;
}
