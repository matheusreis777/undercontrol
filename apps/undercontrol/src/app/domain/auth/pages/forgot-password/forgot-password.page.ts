import { Component, inject, model, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'mb-forgot-password',
  imports: [NzButtonComponent, NzFormModule, NzInputModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.page.html',
  styleUrl: './forgot-password.page.scss',
})
export class ForgotPasswordPage {
  private supabase = injectSupabase();
  private notificationService = inject(NzNotificationService);

  email = model('');

  async submit() {
    await this.supabase.auth.resetPasswordForEmail(this.email());

    this.notificationService.success('E-mail enviado', 'Verifique sua caixa de entrada');

    this.email.set('');
  }
}
