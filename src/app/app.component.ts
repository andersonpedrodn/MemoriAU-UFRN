import { Component, NgModule, ViewChild } from '@angular/core';
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

  selectedImage: string = '';
  selectedDescription: string = '';

  @ViewChild('modalContent') modalContent: any;

  constructor(private modalService: NgbModal) {}

  openModal(image: string, description: string) {
    this.selectedImage = image;
    this.selectedDescription = description;
    this.modalService.open(this.modalContent); // Aqui você passa o template do modal
  }
}
