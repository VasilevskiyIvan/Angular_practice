import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: Profile | null = null;
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(this.user);
    this.http.get<Profile>('http://localhost:3000/profile').subscribe({
      next: (data) => {
        this.user = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Ошибка: ', err);
        this.isLoading = false;
      }
    });
  }
}