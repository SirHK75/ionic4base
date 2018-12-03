import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { BootstrapCssPage } from './bootstrap.page';

// pure presentation components
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BootstrapCssPage
      }
    ])
  ],
  declarations: [BootstrapCssPage]
})
export class BootstrapCssModule {}
