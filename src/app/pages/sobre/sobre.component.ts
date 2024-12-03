import { Component } from '@angular/core';
import { HeaderComponent } from '../../homepage/header/header.component';
import { FooterComponent } from '../../homepage/footer/footer.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
