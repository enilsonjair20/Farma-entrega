import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, MatIconModule, ReactiveFormsModule],
  template: `
    <div class="p-6 pb-24 max-w-md mx-auto space-y-8">
      <header>
        <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">Atención al Cliente</h1>
        <p class="text-slate-500 text-sm mt-1 font-medium italic underline decoration-teal-500/20">Estamos aquí para ayudarte 24/7</p>
      </header>

      <!-- Support Channels (Geometric Theme) -->
      <div class="grid grid-cols-3 gap-4">
        <button class="flex flex-col items-center p-4 bg-white border border-slate-100 rounded-[32px] active:scale-90 transition-all shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-2">
            <mat-icon>chat</mat-icon>
          </div>
          <span class="text-[10px] font-black uppercase tracking-widest text-slate-600">Chat</span>
        </button>
        <button class="flex flex-col items-center p-4 bg-white border border-slate-100 rounded-[32px] active:scale-90 transition-all shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-2">
            <mat-icon>phone</mat-icon>
          </div>
          <span class="text-[10px] font-black uppercase tracking-widest text-slate-600">Llamar</span>
        </button>
        <button class="flex flex-col items-center p-4 bg-white border border-slate-100 rounded-[32px] active:scale-90 transition-all shadow-sm">
          <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-600 flex items-center justify-center mb-2">
            <mat-icon>help_outline</mat-icon>
          </div>
          <span class="text-[10px] font-black uppercase tracking-widest text-slate-600">FAQ</span>
        </button>
      </div>

      <!-- Contact Form (Fortress Style) -->
      <section class="bg-white border border-slate-100 rounded-[48px] p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-bl-[80px] -mr-4 -mt-4 opacity-50"></div>
        
        <h2 class="text-lg font-extrabold text-slate-900 mb-8 flex items-center">
          <div class="w-8 h-8 bg-teal-600 text-white rounded-lg flex items-center justify-center mr-3 scale-75">
            <mat-icon class="scale-50">mail</mat-icon>
          </div>
          Envíanos un mensaje
        </h2>
        
        <form [formGroup]="contactForm" (ngSubmit)="send()" class="space-y-6 relative z-10">
          <div class="space-y-2">
            <label for="subject" class="block text-xs font-black text-slate-400 uppercase tracking-widest px-2">Asunto</label>
            <input 
              id="subject"
              formControlName="subject"
              type="text" 
              placeholder="Ej: Retraso en entrega"
              class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-300 font-bold focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 transition-all"
            >
          </div>
          
          <div class="space-y-2">
            <label for="message" class="block text-xs font-black text-slate-400 uppercase tracking-widest px-2">Mensaje detallado</label>
            <textarea 
              id="message"
              formControlName="message"
              rows="4" 
              placeholder="Describe tu situación..."
              class="w-full bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-300 font-bold focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 resize-none transition-all"
            ></textarea>
          </div>

          <button 
            type="submit"
            [disabled]="contactForm.invalid || isSending"
            class="w-full bg-slate-900 text-white font-black py-5 rounded-[24px] shadow-lg shadow-slate-300 active:scale-95 disabled:opacity-50 disabled:active:scale-100 transition-all uppercase tracking-widest text-xs"
          >
            {{ isSending ? 'Procesando...' : 'Enviar Consulta' }}
          </button>
        </form>
      </section>

      <!-- Office Info -->
      <div class="px-4 space-y-3">
        <div class="flex items-center text-slate-500 text-xs font-bold uppercase tracking-wider">
          <mat-icon class="scale-50 mr-2 text-teal-600">location_on</mat-icon>
          <span>Av. Libertad 1234, Santiago, Chile</span>
        </div>
        <div class="flex items-center text-slate-500 text-xs font-bold uppercase tracking-wider">
          <mat-icon class="scale-50 mr-2 text-teal-600">schedule</mat-icon>
          <span>Lun - Vie: 09:00 AM - 20:00 PM</span>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent {
  private fb = inject(FormBuilder);
  contactForm: FormGroup = this.fb.group({
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });
  isSending = false;

  send() {
    if (this.contactForm.valid) {
      this.isSending = true;
      setTimeout(() => {
        alert('¡Mensaje enviado con éxito! Nos contactaremos pronto.');
        this.contactForm.reset();
        this.isSending = false;
      }, 1500);
    }
  }
}
