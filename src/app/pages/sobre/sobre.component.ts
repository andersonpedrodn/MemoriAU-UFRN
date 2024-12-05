import { Component } from '@angular/core';
import { HeaderComponent } from '../../homepage/header/header.component';
import { FooterComponent } from '../../homepage/footer/footer.component';
import { HerobannerSobreComponent } from '../../homepage/herobanner-sobre/herobanner-sobre.component';
import { MainSobreComponent } from '../../homepage/main-sobre/main-sobre.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,HerobannerSobreComponent,MainSobreComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
