import { Component } from '@angular/core';
import { FooterComponent } from '../../homepage/footer/footer.component';
import { HeaderComponent } from '../../homepage/header/header.component';

@Component({
  selector: 'app-dados-do-curso',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './dados-do-curso.component.html',
  styleUrl: './dados-do-curso.component.scss'
})
export class DadosDoCursoComponent {

}
