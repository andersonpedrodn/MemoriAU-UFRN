import { Component } from '@angular/core';
import { HeaderComponent } from '../../homepage/header/header.component';
import { HerobannerComponent } from '../../homepage/herobanner/herobanner.component';
import { TimelineComponent } from '../../homepage/timeline/timeline.component';
import { FooterComponent } from '../../homepage/footer/footer.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,HerobannerComponent, TimelineComponent, FooterComponent, RouterLink,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
