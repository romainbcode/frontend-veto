import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-owner',
  standalone: true,
  imports: [],
  templateUrl: './card-owner.component.html',
})
export class CardOwnerComponent {
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Input() email!: string;
}
