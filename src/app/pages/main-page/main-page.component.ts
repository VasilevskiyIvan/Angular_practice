import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../pages-components/card/card.component';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../interfaces/card';
import { AddCardComponent } from '../../pages-components/add-card/add-card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardComponent, CommonModule, AddCardComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  data: Card[] = [];
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Card[]>('http://localhost:3000/cards').subscribe({
      next: (cards) => {
        this.data = cards;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Ошибка: ', err);
        this.isLoading = false;
      }
    });
  }
}