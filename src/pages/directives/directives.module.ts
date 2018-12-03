import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { DirectivesPage } from './directives.page';

// pipes
import { PipesModule } from '../../pipes/pipes.module';

// directives
import { DirectivesModule } from '../../directives/directives.module';

// pure presentation components
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    DirectivesModule,
    RouterModule.forChild([
      {
        path: '',
        component: DirectivesPage
      }
    ])
  ],
  declarations: [DirectivesPage]
})
export class DirectivesPageModule {}
