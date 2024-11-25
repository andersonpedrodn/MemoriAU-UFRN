import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './homepage/header/header.component';
import { HomepageComponent } from "./homepage/homepage/homepage.component";
import { FooterComponent } from "./homepage/footer/footer.component";
import { TimelineComponent } from './homepage/timeline/timeline.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomepageComponent, FooterComponent, TimelineComponent, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MemoriAU-50anos';

  constructor(private modalService: NgbModal) {}

    open(content: any) {
      this.modalService.open(content);
    }
}
