import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDropdownOpen = false;
  isBurgerOpen = false;

  toggleDropdown(state?: boolean) {
    if (state !== undefined) {
      this.isDropdownOpen = state
    } else {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }

  toggleBurgerMenu() {
    this.isBurgerOpen = !this.isBurgerOpen;
  }
}
