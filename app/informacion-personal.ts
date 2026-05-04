import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-informacion-personal',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="p-6 pb-24 max-w-md mx-auto space-y-8">
      <header class="text-center pt-8">
        <div class="relative inline-block">
          <div class="w-28 h-28 rounded-[40px] bg-teal-50 flex items-center justify-center border-4 border-white shadow-xl overflow-hidden group">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jair" alt="Jair Profile" class="w-full h-full object-cover">
          </div>
          <button class="absolute -bottom-2 -right-2 bg-slate-900 text-white p-3 rounded-2xl shadow-lg active:scale-90 transition-transform">
            <mat-icon class="scale-75">camera_alt</mat-icon>
          </button>
        </div>
        <h1 class="text-2xl font-extrabold mt-6 text-slate-900 tracking-tight">Jair Enilson</h1>
        <p class="text-slate-500 font-medium pb-2 italic underline decoration-teal-500/30">enilsonjair20&#64;gmail.com</p>
      </header>

      <section class="space-y-4">
        <h2 class="text-xs uppercase tracking-widest font-black text-slate-400 px-2">Datos de la cuenta</h2>
        <div class="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm">
          <div class="p-5 flex items-center border-b border-slate-50 hover:bg-slate-50 transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mr-5">
              <mat-icon>person</mat-icon>
            </div>
            <div class="flex-1">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Nombre completo</p>
              <p class="font-bold text-slate-900">Jair Enilson</p>
            </div>
          </div>
          <div class="p-5 flex items-center border-b border-slate-50 hover:bg-slate-50 transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center mr-5">
              <mat-icon>email</mat-icon>
            </div>
            <div class="flex-1">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Email institucional</p>
              <p class="font-bold text-slate-900">enilsonjair20&#64;gmail.com</p>
            </div>
          </div>
          <div class="p-5 flex items-center hover:bg-slate-50 transition-colors">
            <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mr-5">
              <mat-icon>phone</mat-icon>
            </div>
            <div class="flex-1">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-wider">Teléfono verificado</p>
              <p class="font-bold text-slate-900">+56 9 1234 5678</p>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-xs uppercase tracking-widest font-black text-slate-400 px-2">Seguridad</h2>
        <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <button class="w-full p-5 flex items-center hover:bg-slate-50 transition-colors text-left group">
            <div class="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mr-5 group-hover:rotate-12 transition-transform">
              <mat-icon>lock</mat-icon>
            </div>
            <div class="flex-1">
              <p class="font-bold text-slate-900">Privacidad y Seguridad</p>
            </div>
            <mat-icon class="text-slate-300">chevron_right</mat-icon>
          </button>
        </div>
      </section>

      <button class="w-full py-5 text-slate-900 font-extrabold text-sm border-2 border-slate-900 rounded-[32px] active:bg-slate-900 active:text-white transition-all uppercase tracking-widest shadow-lg shadow-slate-200">
        Cerrar Sesión Segura
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformacionPersonalComponent {}
