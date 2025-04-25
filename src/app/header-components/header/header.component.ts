import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { HeaderAvatarComponent } from '../header-avatar/header-avatar.component';
import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-header',
  imports: [HeaderMenuComponent, HeaderAvatarComponent, PageTitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  actualTitle: string = "Основная страница";
  updateTitle(title: string) {
    this.actualTitle = title;
  }
}
