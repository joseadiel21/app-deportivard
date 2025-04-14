import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio de Sesión', url: '/folder/inbox', icon: 'log-in' },
    { title: 'Registro', url: '/folder/outbox', icon: 'document' },
    { title: 'Panel de Inicio', url: '/folder/favorites', icon: 'browsers' },
    { title: 'Equipos disponibles', url: '/folder/archived', icon: 'basketball' },
    { title: 'Nueva Reserva', url: '/folder/trash', icon: 'add' },
    { title: 'Mis Reservas', url: '/folder/spam', icon: 'list' },
    { title: 'Profile', url: '/folder/spam', icon: 'person-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
