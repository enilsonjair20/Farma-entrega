import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="p-6 pb-24 max-w-md mx-auto space-y-8">
      <header class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-extrabold tracking-tight text-slate-800 leading-tight">Hola, Jair</h1>
          <p class="text-slate-500 text-sm font-medium">Tus medicamentos de hoy</p>
        </div>
        <div class="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700 border border-teal-100">
          <mat-icon>notifications</mat-icon>
        </div>
      </header>

      <!-- Status Card (Theme Banner) -->
      <div class="bg-teal-600 rounded-[32px] p-6 text-white shadow-xl shadow-teal-900/10 transition-all active:scale-[0.98]">
        <div class="flex justify-between items-start mb-4">
          <div>
            <span class="text-teal-100 text-xs uppercase tracking-widest font-extrabold">Pedido en camino</span>
            <h3 class="text-xl font-bold mt-1">Llega en 15 min</h3>
          </div>
          <div class="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
            <mat-icon class="text-white">local_shipping</mat-icon>
          </div>
        </div>
        <div class="h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div class="h-full bg-white w-3/4 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
        </div>
        <p class="mt-4 text-xs font-semibold text-teal-50 uppercase tracking-widest">ORD-8291 • En reparto</p>
      </div>

      <!-- Quick Actions (Geometric Style) -->
      <div class="grid grid-cols-2 gap-4">
        <button class="bg-white border border-slate-100 p-5 rounded-[32px] shadow-sm flex flex-col items-center justify-center space-y-3 active:scale-95 transition-all hover:border-teal-200">
          <div class="w-12 h-12 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center">
            <mat-icon>add_shopping_cart</mat-icon>
          </div>
          <span class="text-sm font-bold text-slate-700 tracking-tight">Nuevo Pedido</span>
        </button>
        <button class="bg-white border border-slate-100 p-5 rounded-[32px] shadow-sm flex flex-col items-center justify-center space-y-3 active:scale-95 transition-all hover:border-teal-200">
          <div class="w-12 h-12 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center">
            <mat-icon>receipt_long</mat-icon>
          </div>
          <span class="text-sm font-bold text-slate-700 tracking-tight">Mis Recetas</span>
        </button>
      </div>

      <!-- Medication List -->
      <section>
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-extrabold text-slate-800 tracking-tight">Medicamentos Activos</h2>
          <button class="text-sm text-teal-600 font-bold">Ver todos</button>
        </div>
        
        <div class="space-y-4">
          @for (med of medications; track med.id) {
            <div class="bg-white border border-slate-100 p-5 rounded-3xl flex items-center shadow-sm hover:border-teal-100 transition-all">
              <div class="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mr-5">
                <mat-icon class="scale-110">medication</mat-icon>
              </div>
              <div class="flex-1">
                <h4 class="font-bold text-slate-900">{{ med.name }}</h4>
                <p class="text-slate-500 text-xs font-medium">{{ med.dosage }} • {{ med.frequency }}</p>
              </div>
              <div class="flex flex-col items-end">
                <span class="text-[10px] font-black text-teal-700 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-100 tracking-tighter uppercase">En camino</span>
              </div>
            </div>
          }
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {
  medications = [
    { id: 1, name: 'Amoxicilina 500mg', dosage: '1 cápsula', frequency: 'Cada 8h' },
    { id: 2, name: 'Paracetamol 1g', dosage: '1 tableta', frequency: 'S.O.S' },
  ];
}
