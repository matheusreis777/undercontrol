import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, inject, model, signal, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { LoadingService } from '@shared/services/loading/loading.service';
import { eDynamicField } from 'apps/undercontrol/src/app/widget/components/dynamic-form/dynamic-field.enum';
import { DynamicFormConfig } from 'apps/undercontrol/src/app/widget/components/dynamic-form/dynamic-form-confg.interface';
import { DynamicFormComponent } from 'apps/undercontrol/src/app/widget/components/dynamic-form/dynamic-form.component';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'mb-forgot-password',
  imports: [DynamicFormComponent, NzButtonComponent, NzFormModule, NzInputModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.page.html',
  styleUrl: './forgot-password.page.scss',
})
export class ForgotPasswordPage {
  private supabase = injectSupabase();
  private notificationService = inject(NzNotificationService);
  private loadindService = inject(LoadingService);

  formConfig: DynamicFormConfig[] = [
    {
      label: 'E-mail',
      name: 'email',
      type: {
        field: eDynamicField.INPUT,
        typeField: 'email',
      },
      validations: [Validators.required, Validators.email],
      size: 24,
    },
  ];

  @ViewChild(DynamicFormComponent) dynamicForm!: DynamicFormComponent;

  async submit() {
    this.loadindService.start();

    const { email } = this.dynamicForm.form.value;

    await this.supabase.auth.resetPasswordForEmail(email);

    this.notificationService.success('E-mail enviado', 'Verifique sua caixa de entrada');

    this.dynamicForm.form.reset();

    this.loadindService.stop();
  }
}
