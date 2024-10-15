import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  palavraDinamica: string = 'história';
  palavras: string[] = ['história', 'pesquisa', 'ensino', 'premiações', 'legado', 'extensão'];
  palavraIndex: number = 0;
  isHiding: boolean = false

  constructor(private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    console.log('ngOnINit chamado!')
    this.startWordRotation();
  }

  startWordRotation(): void {
    setInterval(() => {
      this.isHiding = true;
      this.cdr.detectChanges();

      setTimeout(() => {
        this.palavraIndex = (this.palavraIndex + 1) % this.palavras.length;
        this.palavraDinamica = this.palavras[this.palavraIndex];
        this.isHiding = false;
        this.cdr.detectChanges();
      }, 200);
    }, 3000);
  }

  
}
