import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  template: `
    <div class="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <!-- Main Content Area -->
      <main class="flex-1 overflow-auto">
        <router-outlet></router-outlet>
      </main>

      <!-- Bottom Tab Navigation -->
      <nav class="fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-t border-slate-200 flex items-center justify-around px-4 pb-4 z-50">
        <a 
          routerLink="/inicio" 
          routerLinkActive="active" 
          #inicio="routerLinkActive"
          class="flex flex-col items-center space-y-1 w-20 transition-all duration-300"
          [ngClass]="inicio.isActive ? 'text-teal-600' : 'text-slate-400'"
        >
          <div 
            class="p-2 rounded-2xl transition-all duration-300" 
            [ngClass]="inicio.isActive ? 'bg-teal-50' : 'bg-transparent'"
          >
            <mat-icon class="scale-110">{{ inicio.isActive ? 'home' : 'outline_home' }}</mat-icon>
          </div>
          <span class="text-[10px] font-extrabold uppercase tracking-widest">Inicio</span>
        </a>

        <a 
          routerLink="/perfil" 
          routerLinkActive="active" 
          #perfil="routerLinkActive"
          class="flex flex-col items-center space-y-1 w-20 transition-all duration-300"
          [ngClass]="perfil.isActive ? 'text-teal-600' : 'text-slate-400'"
        >
          <div 
            class="p-2 rounded-2xl transition-all duration-300" 
            [ngClass]="perfil.isActive ? 'bg-teal-50' : 'bg-transparent'"
          >
            <mat-icon class="scale-110">{{ perfil.isActive ? 'person' : 'person_outline' }}</mat-icon>
          </div>
          <span class="text-[10px] font-extrabold uppercase tracking-widest">Perfil</span>
        </a>

        <a 
          routerLink="/contacto" 
          routerLinkActive="active" 
          #contacto="routerLinkActive"
          class="flex flex-col items-center space-y-1 w-20 transition-all duration-300"
          [ngClass]="contacto.isActive ? 'text-teal-600' : 'text-slate-400'"
        >
          <div 
            class="p-2 rounded-2xl transition-all duration-300" 
            [ngClass]="contacto.isActive ? 'bg-teal-50' : 'bg-transparent'"
          >
            <mat-icon class="scale-110">{{ contacto.isActive ? 'chat_bubble' : 'chat_bubble_outline' }}</mat-icon>
          </div>
          <span class="text-[10px] font-extrabold uppercase tracking-widest">Contacto</span>
        </a>
      </nav>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .active {
      transform: translateY(-4px);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
