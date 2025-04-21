import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'available-equipment',
    loadComponent: () => import('./available-equipment/available-equipment.page').then( m => m.AvailableEquipmentPage)
  },
  {
    path: 'new-reservation',
    loadComponent: () => import('./new-reservation/new-reservation.page').then( m => m.NewReservationPage)
  },
  {
    path: 'my-reservation',
    loadComponent: () => import('./my-reservation/my-reservation.page').then( m => m.MyReservationPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
];
