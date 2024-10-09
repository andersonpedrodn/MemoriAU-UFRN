import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  mudancaPalavra: string = 'história';
  palavras: string[] = ['história', 'pesquisa', 'ensino', 'premiações', 'legado', 'extensão'];
  palavraIndex: number = 0;

  ngOnInit(): void {
    this.startWordRotation();
  }

  startWordRotation(): void {
    setInterval(() => {
      this.palavraIndex = (this.palavraIndex + 1) % this.palavras.length;
      this.mudancaPalavra = this.palavras[this.palavraIndex];
    }, 1000);
  }
}
