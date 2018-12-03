import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RoutesParamsPage } from './routes-params.page';

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
        component: RoutesParamsPage
      }
    ])
  ],
  declarations: [RoutesParamsPage]
})
export class RoutesParamsModule {}
