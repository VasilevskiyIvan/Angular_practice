import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'header-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
  @Output() newTitle = new EventEmitter<string>();
  isMenuOpen = false;
  
  menuItems = [
    { text: "Профиль", path: "profile" },
    { text: "Основная страница", path: "" },
    { text: "Настройки", path: "settings" }
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(item: {text: string, path: string}) {
    this.router.navigate([item.path]);
    this.newTitle.emit(item.text);
    this.isMenuOpen = false;
  }
}