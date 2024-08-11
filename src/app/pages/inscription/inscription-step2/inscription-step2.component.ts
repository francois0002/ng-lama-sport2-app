import { Component } from '@angular/core';

@Component({
  selector: 'app-inscription-step2',
  templateUrl: './inscription-step2.component.html',
  styleUrl: './inscription-step2.component.css'
})
export class InscriptionStep2Component {
  currentStep: number = 2;

  onInput(inputElement: HTMLInputElement) {
    // Vous pouvez ajouter des logiques supplémentaires ici si nécessaire
    console.log(inputElement.value);
}
}
