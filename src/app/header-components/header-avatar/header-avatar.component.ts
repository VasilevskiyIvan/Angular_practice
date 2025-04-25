import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'header-avatar',
  imports: [CommonModule],
  templateUrl: './header-avatar.component.html',
  styleUrl: './header-avatar.component.scss'
})
export class HeaderAvatarComponent implements OnInit  {
  user: Profile | null = null;
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit () {
    this.http.get<Profile>('http://localhost:3000/profile').subscribe({
      next: (userData)=>{
        this.user = userData;
        console.log(userData)
        console.log(this.user)
        this.isLoading = false;
      },
      error: (err)=>{
        alert(`Ошибка: ${err}`)
        this.isLoading = false;
      }
    })
  }
  
}
