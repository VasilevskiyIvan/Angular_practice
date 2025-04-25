import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  @Input() pageTitle: string = "Основная страница";
}
