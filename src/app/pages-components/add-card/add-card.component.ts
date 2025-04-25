import { Component } from '@angular/core';
import { Card } from '../../interfaces/card';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'add-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.scss'
})
export class AddCardComponent {
  public data!: Card;
  public cardForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    imagePath: new FormControl()
  })
  
  constructor(private http: HttpClient) {}

  public onSubmit() {
    const newCard: Card = {
      id: Date.now(),
      title: this.cardForm.value.title,
      description: this.cardForm.value.description,
      imagePath: this.cardForm.value.imagePath,
    }
    console.log(newCard)

    this.http.post<Card>('http://localhost:3000/cards', newCard).subscribe({
      next: () => alert('Настройки сохранены'),
      error: (err) => alert('Ошибка: ' + err.message)
    });
  }
}
