import { Routes } from '@angular/router';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

export const routes: Routes = [
    {path: 'profile', component: ProfilePageComponent},
    {path: 'settings', component: SettingsPageComponent},
    {path: '', component: MainPageComponent}
];