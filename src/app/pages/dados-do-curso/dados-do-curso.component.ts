import { Component } from '@angular/core';
import { FooterComponent } from '../../homepage/footer/footer.component';
import { HeaderComponent } from '../../homepage/header/header.component';
import { HerobannerDadosCursoComponent } from '../../homepage/herobanner-dados-curso/herobanner-dados-curso.component';
import { MainDadosCursoComponent } from '../../homepage/main-dados-curso/main-dados-curso.component';

@Component({
  selector: 'app-dados-do-curso',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HerobannerDadosCursoComponent, MainDadosCursoComponent],
  templateUrl: './dados-do-curso.component.html',
  styleUrl: './dados-do-curso.component.scss'
})
export class DadosDoCursoComponent {

}
