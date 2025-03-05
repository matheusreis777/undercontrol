import { Component } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { MedicineBoxTwoTone } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'mb-landing-page',
  standalone: true,
  imports: [NzBreadCrumbModule, NzMenuModule, NzLayoutModule, NzIconModule],
  templateUrl: './landing-page.page.html',
  styleUrl: './landing-page.page.scss',
  providers: [
    { provide: NZ_ICONS, useValue: [MedicineBoxTwoTone] }, // Registra o ícone no provedor
  ],
})
export class LandingPagePage {}
