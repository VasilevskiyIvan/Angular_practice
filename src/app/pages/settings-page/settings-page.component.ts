import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
  usernameControl = new FormControl('');
  ageControl = new FormControl<number | null>(null);
  aboutControl = new FormControl('');
  locationControl = new FormControl('');
  hobbiesControl = new FormControl('');
  avatarControl = new FormControl('');
  telegramControl = new FormControl('');
  vkControl = new FormControl('');

  constructor(private http: HttpClient) {
    this.http.get<Profile>('http://localhost:3000/profile').subscribe({
      next: (data) => {
        this.usernameControl.setValue(data.username || '');
        this.ageControl.setValue(data.age || null);
        this.aboutControl.setValue(data.about || '');
        this.locationControl.setValue(data.location || '');
        this.hobbiesControl.setValue(data.hobbies?.join(', ') || '');
        this.avatarControl.setValue(data.avatar || '');
        
        if (data.socialLinks) {
          this.telegramControl.setValue(data.socialLinks.telegram || '');
          this.vkControl.setValue(data.socialLinks.vk || '');
        }
      },
      error: (err) => {
        console.error('Ошибка: ', err);
      }
    });
  }

  saveSettings() {
    const profileData: Profile = {
      username: this.usernameControl.value || '',
      avatar: this.avatarControl.value || '',
      age: this.ageControl.value ? Number(this.ageControl.value) : undefined,
      about: this.aboutControl.value || undefined,
      location: this.locationControl.value || undefined,
      hobbies: this.hobbiesControl.value ? this.hobbiesControl.value.split(',').map(h => h.trim()) : undefined,
      socialLinks: {
        telegram: this.telegramControl.value || undefined,
        vk: this.vkControl.value || undefined
      }
    };

    this.http.put<Profile>('http://localhost:3000/profile', profileData).subscribe({
      next: () => alert('Настройки сохранены'),
      error: (err) => alert('Ошибка: ' + err.message)
    });
  }
}