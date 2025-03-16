import { Component } from "@angular/core";
import { VeterinarianComponent } from "./veterinarian/veterinarian.component";
import { DocumentComponent } from "./document/document.component";

@Component({
  selector: 'app-office',
  standalone: true,
  imports: [VeterinarianComponent, DocumentComponent],
  templateUrl: './office.component.html',
})
export class OfficeComponent {

}