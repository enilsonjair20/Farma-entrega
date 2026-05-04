import {Routes} from '@angular/router';
import { LayoutComponent } from './layout';
import { InicioComponent } from './inicio';
import { InformacionPersonalComponent } from './informacion-personal';
import { ContactoComponent } from './contacto';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'perfil', component: InformacionPersonalComponent },
      { path: 'contacto', component: ContactoComponent }
    ]
  },
  { path: '**', redirectTo: 'inicio' }
];
